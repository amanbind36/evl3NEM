const {Router} = require("express");
const patientRouter = Router();
const patientController = require('../controllers/patientController');

patientRouter.get('/patients' , patientController.getPatients);

module.exports= patientRouter;