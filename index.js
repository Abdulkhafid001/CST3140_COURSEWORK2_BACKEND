// import and intialize express
require("dotenv").config()
var express = require('express');
var app = express();

app.use(function (req, res, next){
  var logMsg = `${req.ip} requested ${req.url}`
  console.log(logMsg)
  next();
})

var lessonsRouter = require('./routes/lessons')
app.use("/lessons", lessonsRouter)

app.listen(8080)