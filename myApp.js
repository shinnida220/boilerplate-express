var express = require('express');
var app = express();

console.log("Hello World");

app.get('/', (_, res) => {
  res.send('Hello Express');
});




































module.exports = app;
