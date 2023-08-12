const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const app = express();
const Chat = require("./model");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://gweep:rootusergweep123@cluster0.jygrbxc.mongodb.net/grknai"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/chats", async (req, res) => {
  let chats = await Chat.find({});
  res.status(200).send(chats);
});
app.post("/chat", async (req, res) => {
  let chat = await Chat.findOne({ chatId: req.body.chatId });
  if (!chat) return res.status(404).send({ error: "Chat not found" });
  res.status(200).send(chat);
});
app.get("/chat/new", async (req, res) => {
  let chat = new Chat({
    chatId: uuid.v4(),
    messages: [],
    title: "New Chat",
  });
  await chat.save();
  res.status(200).send(chat);
});
app.post("/chat/message/new", async (req, res) => {
  let message = req.body.message;
  let author = req.body.user;
  let chatId = req.body.chatId;

  await Chat.updateOne(
    { chatId: chatId },
    {
      $push: {
        messages: {
          messageId: uuid.v4(),
          message: message,
          sender: author,
          created: Date.now(),
        },
      },
    }
  );
  res.status(200).send({
    success: true,
    message: {
      messageId: uuid.v4(),
      message: message,
      sender: author,
      created: Date.now(),
    },
  });
});
app.post("/chat/update", async (req, res) => {
  let chatId = req.body.chatId;
  let newTitle = req.body.newTitle;
  await Chat.updateOne({ chatId: chatId }, { title: newTitle });
  res.status(200).send({ success: true });
});
app.post("/chat/delete", async (req, res) => {
  let chatId = req.body.chatId;
  await Chat.deleteOne({ chatId: chatId });
  res.status(200).send({ success: true });
});
app.listen(5252, () => {
  console.log("Server started on port 5252");
});
