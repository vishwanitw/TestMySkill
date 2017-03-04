var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var http = require('http');
var fs = require('fs');
var cors = require('cors');

//var users = require('./database/connect.js');
var loginApi = require('./api/login/loginApi.js');
var adminLoginApi = require('./api/login/adminLoginApi.js');
var usersApi = require('./api/users/usersApi.js');


// Checking Api List //
var checkingApi = require('./api/checkingApi/checkApi.js');


var app = module.exports = express();

app.use(cors());
app.use(bodyParser.json());

http.createServer(app).listen(3000);

app.post('/login', loginApi.validateLogin);

app.post('/adminLogin', adminLoginApi.validateAdminLogin);

app.post('/displayAllUsers', usersApi.displayAllUsers);

app.post('/displayUsersList', usersApi.displayAllUsersList);

app.post('/insertUser', usersApi.insertUser);

app.post('/getAllUsers', usersApi.getAllUsers);

app.post('/checkMsisdn', checkingApi.checkMsisdn);

console.log("Server Launched Successfully!!!!");