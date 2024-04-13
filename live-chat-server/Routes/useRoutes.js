

const express = require("express");
const router = express.Router();
const { loginController,registerController } = require("../Controller/userController");

const Router = express.Router();
Router.post('/login',loginController);
Router.post('/register',registerController);

module.exports = router;