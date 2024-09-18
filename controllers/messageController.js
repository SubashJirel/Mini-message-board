const messages = require('../models/messageModel');

const getMessages = (req, res) => {
  res.render('pages/index', { messages: messages });
};
const setMessages = (req, res) => {
  console.log(req.body.author);
  const author = req.body.author;
  const message = req.body.message;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect('/');
};
const messageForm = (req, res) => {
  res.render('pages/form', { messages: messages });
};
module.exports = {
  getMessages,
  setMessages,
  messageForm,
};
