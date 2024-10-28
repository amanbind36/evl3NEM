const express = require('express');
const appointmentRouter = express.Router();
const {doctorAuthorization,roleAuthorization} =require("../middleware/rbac")
const { createAppointment, getAppointmentsByDoctor, getAppointmentHistory,approveAppointment,resudeleAppointment } = require('../controllers/appointmentController');

appointmentRouter.post('/appointments', createAppointment,roleAuthorization);
appointmentRouter.get('/appointments', getAppointmentsByDoctor);
appointmentRouter.get("/history",getAppointmentHistory)
appointmentRouter.put("/approve",approveAppointment,roleAuthorization)
appointmentRouter.put("/resdule",resudeleAppointment,roleAuthorization,doctorAuthorization)


module.exports = appointmentRouter;
