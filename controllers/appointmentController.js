const Appointment = require('../models/appointment');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

const createAppointment = async (req, res) => {
    const { patientName, doctorName, appointmentTime, reason } = req.body;
    try {
        const doctor = await Doctor.findOne({ name: doctorName });
        const patient = await Patient.findOne({ name: patientName });

        if (!doctor || !patient) {
            return res.status(400).json({ message: "Doctor or Patient not found" });
        }

        const appointment = new Appointment({
            patientName,
            doctorName,
            appointmentTime,
            reason,
        });

        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAppointmentsByDoctor = async (req, res) => {
    try {
        const { doctorName } = req.params;
        const appointments = await Appointment.find({ doctorName }).sort({ appointmentTime: 1 });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAppointmentHistory = async (req, res) => {
    try {
        const { id } = req.params;
        const appointments = await Appointment.find({ patientName: id }).sort({ appointmentTime: -1 });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const approveAppointment=async(req,res)=>{
    try{
        const {id}=req.params;
        await Appointment.findByIdAndUpdate(id,{status:"approved"});
        res.json(201).json({message:"appointment approved"})
    
    }catch(err){
        res.status(500).json({ message: error.message });
    }
    
}


const resudeleAppointment=async(req,res)=>{
    try{
        const {id}=req.params;
        const {appointmentTime}=req.body;
        await Appointment.findByIdAndUpdate(id,{appointmentTime})
        res.json(201).json({message:"Appointment resudled"})
    }catch(err){
        res.status(500).json({ message: error.message });
    }
}



module.exports = { createAppointment, getAppointmentsByDoctor, getAppointmentHistory,approveAppointment,resudeleAppointment };
