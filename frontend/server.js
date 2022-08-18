const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors({
  origin: [
    'localhost:3333',
    'https://climatch.herokuapp.com',
    'https://climatch-api.herokuapp.com',
    'localhost:4200',
    'localhost:4300',
  ],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  credentials: true,
}));
app.use(express.static(__dirname + '/dist/scientist-frontend'));
app.get(
  '/*',
  function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/scientist-frontend/index.html'));
  }
);
app.listen(process.env.PORT || 8081);
