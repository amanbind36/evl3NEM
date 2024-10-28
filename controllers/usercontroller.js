const {UserModel}=require("../models/users.model");

const bcrypt=require('bcrypt')

const {sqlconnection} =require("../db/sql")

const userTable=sqlconnection.getRepository(UserModel);

const createUser=async(req,res)=>{
    const {name,email,password}=req.body;

    if (name && email && password){
        const hashpassword=await bcrypt.hash(password,8)
        const newuser=userTable.create({
            name, email, password:hashpassword,role:req.body?req.body.role:"user"
        })
        await userTable.save()
        return res.status(201).json({message:"user created suceessfully "})

    }
}


module.exports={
    createUser
}