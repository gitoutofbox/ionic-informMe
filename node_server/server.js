const express = require('express');
const cors    = require('cors');
const bodyParser = require('body-parser');
const db      = require('./database');
const report    = require('./routes/report')
// const chat      = require('./routes/chat');
const app     = express();

app.use(express.static('app'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

database.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  const server = app.listen(8081, function () {
      const host = server.address().address
      const port = server.address().port
      console.log("Example app listening at http://%s:%s", host, port)
  });
});

app.post('/report', report.saveReport);
// app.post('/chat/startSession', chat.createSession);
// app.post('/chat/send', chat.sendMessage);