const {Router} = require('express');
const doctorRouter= Router();
const { doctorAuthorization,roleAuthorization} =require("../middleware/rbac")
const {authenticate} =require("../middleware/auth.middleware")
const {getDoctors,addDoctor,updatedoctor,deleteDoctor} = require('../controllers/doctorController');

doctorRouter.get('/doctors',getDoctors)
doctorRouter.post('/adddoctor',addDoctor,authenticate,roleAuthorization)
doctorRouter.put("/updatedoctor",updatedoctor,doctorAuthorization,roleAuthorization,authenticate)

doctorRouter.delete("/delete",deleteDoctor,roleAuthorization,doctorAuthorization)
module.exports= {doctorRouter};