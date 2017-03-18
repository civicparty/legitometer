const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join('public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
module.exports = app;
