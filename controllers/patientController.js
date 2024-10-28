const Patient = require('../models/Patient')

const getPatients = async (req,res) =>{
    try{
        const {minAge, maxAge,page = 1,limit = 10,search } = req.query;
        const filter = {}
        if (minAge ) filter.age = {$gte: minAge}
        if (maxAge) filter.age = {...filter.age, $lte:maxAge};
        const query = Patient.find(filter)
        if (search){
            query.where({name:new RegExp(search,'i')})
        }

        const patients = await query.skip((page -1) * limit).limit(limit);
        const total = await Doctor.countDocuments(filter);
        res.json({total,patients})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {getPatients};