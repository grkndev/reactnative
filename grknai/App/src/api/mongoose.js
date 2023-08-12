let baseurl = "http://192.168.1.42:5252";

const getChats = async () => {
  let response = await fetch(baseurl + "/chats");
  let chats = await response.json();
  return chats;
};
const getChat = async (chatId) => {
  let response = await fetch(baseurl + "/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chatId: chatId }),
  });
  let chat = await response.json();
  return chat;
};

const updateChat = async (chatId,title) => {
  let response = await fetch(baseurl + "/chat/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chatId: chatId, newTitle: title }),
  });
  let chat = await response.json();
  return chat;
};

const deleteChat = async (chatId) => {
  let response = await fetch(baseurl + "/chat/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chatId: chatId }),
  });
  let chat = await response.json();
  return chat;
};

const newChat = async () => {
  let response = await fetch(baseurl + "/chat/new", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
   // body: JSON.stringify({ chatId: chatId }),
  });
  let chat = await response.json();
  return chat;
};

const newMessage = async (chatId, message, user) => {
  let response = await fetch(baseurl + "/chat/message/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chatId: chatId, message: message, user: user }),
  });
  let result = await response.json();
  return result;
};

export { updateChat, deleteChat, getChats, getChat, newChat, newMessage };
