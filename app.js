const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const messageController = require('./controllers/messageController');
app.get('/', messageController.getMessages);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
