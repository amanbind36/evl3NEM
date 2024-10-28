const { Doctor } = require("../models/doctor.model");
const { Patient } = require("../models/patient.model");
const { UserModel } = require("../models/user.model");

const authenticate = async(req, res, next) =>{

    try{
        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

        if(!token){
            return res.status(401).json({message: "Please login"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await UserModel.findById(decoded.id);
        
        if(!user){
            const doctor = await Doctor.findById(decoded.id);
            if(!doctor){
                const patient = await Patient.findById(decoded.id);
                if(!patient){
                    return res.status(404).json({message: "user not found, login again"});
                }
            }
        }
        req.user = decoded;
        return next();

    }catch(err){
        return res.status(500).json({message:err.message});
    }

}

module.exports = {
    authenticate
}