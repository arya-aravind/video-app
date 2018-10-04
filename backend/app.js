var express = require('express');
var app = express();
var db = require('./DB/db');
var cors = require('cors');


app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
global.__root   = __dirname + '/'; 

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var VideoController = require(__root + 'video/VideoController');
app.use('/api/video', VideoController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);



module.exports = app;