const {Schema, model}= require('mongoose')

const doctorSchema = new Schema({
    name: {type:String,required: true},
    specialization: {type:String,required: true},
    availability: {type:Boolean,required: true},
});

const Doctor = model("Doctor", doctorSchema);

module.exports = Doctor;