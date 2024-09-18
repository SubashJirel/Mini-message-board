const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const indexRouter = require('./routes/indexRouter');
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
