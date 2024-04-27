const expressAsyncHandler = require("express-async-handler");
const message = require("../models/messagemodel");
const User = require("../models/userModel");
const Chat = require("../models/chatModels");
const Message = require("../models/messagemodel");

const allMessages = expressAsyncHandler(async (req, res) => {
    const { chatId, userId } = req.body;
    const added = await chatId.findByIdAndUpdate(
        chatId, {
        $push: { users: userId },
    }, {
        new: true,
    }
    )
        .populate("users", "-password")
        .populate("groupAdmin", "-password");

    if (!added) {
        res.status(404);
        throw new Error("chat not Found");
    }
    else {
        res.json(added);
    }
});

const sendMessage = expressAsyncHandler(async (req, res) => {
    const { content, chatId } = req.body;
    if (!content || !chatId) {
        return res.sendStatus(400);
    }
    var newMessage = {
        sender: req.user._id,
        content: content,
        chat: chatId,
    };
    try {
        var message = await Message.create(newMessage);

        console.log(message);
        message = await message.populate("sender", "name pic");
        message = await message.populate("chat");
        message = await User.populate(message, {
            path: "chat.users",
            select: "name email",
        });
        await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });
        res.json(message);
    }
    catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});
module.exports = { allMessages, sendMessage }