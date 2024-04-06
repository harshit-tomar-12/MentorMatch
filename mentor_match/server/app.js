const config = require('./config');
const express = require('express');
const appRoutes = require("./api/routes");
const mongoose = require('mongoose');
const bodyPraser = require('body-parser');
const pino = require('express-pino-logger')();
const { videoToken} = require('./tokens');
const cors = require('cors');
const { StreamChat } = require('stream-chat');
const app = express();

require('dotenv').config();
api_key=process.env.CHAT_STREAM_KEY;
api_secret=process.env.CHAT_STREAM_SECRET;
const chatClient = new StreamChat(api_key, api_secret);
const mongoDBUri = 'mongodb+srv://7455867051mohit:abcdefghijklm@upskill.jjozp4p.mongodb.net/test';

//..
mongoose.connect(mongoDBUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected..');
});

mongoose.connection.on('error', (err) => {
  console.error('connection error:', err);
});


app.use(express.json());
app.use(cors());
app.use(bodyPraser.urlencoded({ extended: false }));
app.use(bodyPraser.json());
app.use(pino);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// app.get("/", (req, res) => {
//   res.send('Express API is up and  runnning.');
// });



app.use('/api', appRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});






const sendTokenResponse = (token, res) => {
  res.set('Content-Type', 'application/json');
  res.send(
    JSON.stringify({
      token: token.toJwt()
    })
  );
};

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/video/token', (req, res) => {
  const identity = req.query.identity;
  const room = req.query.room;
  const token = videoToken(identity, room, config);
  sendTokenResponse(token, res);

});
app.post('/video/token', (req, res) => {
  const identity = req.body.identity;
  const room = req.body.room;
  const token = videoToken(identity, room, config);
  sendTokenResponse(token, res);
});
app.post('/chat/token', (req, res) => {
  try {
    const { userId, username } = req.body;
    const token = chatClient.createToken(userId);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(5000, () =>
  console.log('Express server is running on localhost:5000')
);