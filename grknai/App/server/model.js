const mongoose = require("mongoose");

const ChatSh = new mongoose.Schema({
  chatId: { type: String, required: true },
  created: { type: Date, default: Date.now },
  title: { type: String, default: "New Chat" },
  messages: [
    {
      messageId: { type: String, required: true },
      created: { type: Date, default: Date.now },
      sender: { type: String, required: true },
      message: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("chat", ChatSh);
