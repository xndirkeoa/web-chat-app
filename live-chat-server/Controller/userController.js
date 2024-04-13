const express = require("express");
const UserModel = require('../models/userModel');
const expressAssyncHandler = require("express-async-handler");
const loginController = ()=>{}

   console.log("akjcaklsjjnksjn");

const registerController =expressAssyncHandler (async(req,res)=>{
    console.log("akjcaklsjjnksjn");
    try {
        const{name,email,password}  = req.body;
        console.log(req.body);
    if(!name ||  !email || !password){
        res.send(400);
        console.log("All neccesary input fields have not been filled");
    }
    const userExist = await UserModel.findOne({email});
    if(userExist)
    {
        console.log("user already exist");
    }
    const userNameExist = await UserModel.findOne({email});
    if(userNameExist)
    {
        console.log("UserName already Taken");
    }
    const user = await UserModel.create ({name:req.body.name,email:req.body.email,password:req.body.password});s
    res.send("user create succesfullys")
    } catch (error) {
        console.log(error.message)
    }
});


module.exports ={loginController,registerController};