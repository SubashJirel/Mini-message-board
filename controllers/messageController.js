const messages = require('../models/messageModel');

const getMessages = (req, res) => {
  res.render('pages/index', { messages: messages });
};

module.exports = {
  getMessages,
};
