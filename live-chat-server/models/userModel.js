const mongoose = require("mongoose");
const userModel = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    Password:{
        type: String,
        required: true,
    },
},
    {
        timestamps : true,
    }
);
const User = mongoose.model("user",userModel);
module.exports = User;