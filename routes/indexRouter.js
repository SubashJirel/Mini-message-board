const express = require('express');
const router = express.Router();

// //Get Home page

const messageController = require('../controllers/messageController');
router.get('/', messageController.getMessages);

module.exports = router;
