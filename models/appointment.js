const {Schema, model}= require('mongoose')

const appointmentSchema = new Schema({
    patientName: {type:String,required: true},
    doctorName: {type:String,required: true},
    appointmentTime: {type:Date,required: true},
    reason: {type:String,required: true},
});

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;