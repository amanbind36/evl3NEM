const Doctor = require('../models/Doctor')

const getDoctors = async (req,res) =>{
    try{
        const {specialization, availability,page = 1,limit = 10,search } = req.query;
        const filter = {}
        if (specialization ) filter.specialization=specialization;
        if (availability !== undefined) filter.availability =availability === 'true';
        const query = Doctor.find(filter)
        if (search){
            query.where({name:new RegExp(search,'i')})
        }

        const doctors = await query.skip((page -1) * limit).limit(limit);
        const total = await Doctor.countDocuments(filter);
        res.json({total,doctors})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const addDoctor=async(req,res)=>{
    const {name,specialization,availability}=req.body;
    const doctor= new Doctor ({name,specialization,availability});
    await doctor.save()
    res.status(201).json({message:"doctor added "})
}

const updatedoctor=async(req,res)=>{
    const {id}=req.params;
    const update=req.body;
    await Doctor.findByIdAndUpdate(id,update);
res.json(201).json({message:"doctor updated"})
}


const deleteDoctor=async(req,res)=>{
    const {id}=req.params;
    await Doctor.findByIdAndDelete(id);
    res.json(201).json({message:"doctor deleted"})
}


module.exports = {getDoctors,addDoctor,updatedoctor,deleteDoctor};