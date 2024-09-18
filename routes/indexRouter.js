const express = require('express');
const router = express.Router();

// //Get Home page

const messageController = require('../controllers/messageController');
router.get('/', messageController.getMessages);
router.get('/new', messageController.messageForm);
router.post('/new', messageController.setMessages);
module.exports = router;
