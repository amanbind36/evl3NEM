const express=require('express')

const {registerController,loginController}=require("../controllers/authcontroller")

const authRouter=express.Router()

authRouter.post("/create",registerController);

authRouter.get("/:id",loginController)

module.exports={
    authRouter
}