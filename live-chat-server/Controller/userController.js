const express = require("express");
const UserModel = require("../models/userModel");
const generateToken = require("../Config/generateToken");
const expressAsyncHandler = require("express-async-handler");



const loginController = expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, password } = req.body;
    const user = await UserModel.findOne({ name });
    console.log(await user.matchPassword(password));
    if (user && (await user.matchPassword(password))) {
        const response = {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        };
        console.log(response);
        res.json(response);
    } else {
        res.status(401);
        throw new Error("Invailid Username and password");
    }
});
const registerController = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).send("All necessary input fields have not been filled");
    }
    // Check if the email already exists
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
        return res.status(400).send("User with this email already exists");
    }
    // Check if the username already exists
    const userNameExist = await UserModel.findOne({ name });
    if (userNameExist) {
        return res.status(400).send("Username already taken");
    }
    // Create the user
    const user = await UserModel.create({ name, email, password });
    if (user) {
        res.status(201).json
            ({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
    }
    else {
        res.status(400)
        throw new error("Registration Error");
    }
});
const fetchAllUsersController = expressAsyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {};

    const users = await UserModel.find(keyword).find({
        _id: { $ne: req.user._id },
    });
    res.send(users);
});
module.exports = { loginController, registerController, fetchAllUsersController };
