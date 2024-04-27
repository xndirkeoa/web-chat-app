const express = require("express");
const { accessChat, fetchChats, createGroupchat, groupExit, fetchGroups, addSelfToGroup, } = require("../Controller/chatController");

const { protect } = require("../middleware/authMiddleware");
const Router = express.Router();

Router.route('/').post(protect, accessChat);
Router.route('/').get(protect, fetchChats);
Router.route('/createGroup').post(protect, createGroupchat);
Router.route('/fetchGroups').get(protect, fetchGroups);
Router.route('/groupExit').put(protect, groupExit);
Router.route('/addSelfToGroup').put(protect, addSelfToGroup);

module.exports = Router;