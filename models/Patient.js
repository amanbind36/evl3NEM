const {Schema, model}= require('mongoose')

const PatientSchema = new Schema({
    name: {type:String,required: true},
    age: {type:Number,required: true},
    email: {type:String,required: true},
});

const Patient = model("Patient", PatientSchema);

module.exports = Patient;