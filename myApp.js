var express = require('express');
var app = express();

// Serve static files..
app.use(express.static(__dirname + '/public'));

// Log hellow world to the console
console.log("Hello World");

app.get('/', (_, res) => {
  // Send a static string response
  // res.send('Hello Express');

  // Respond with a file.
  res.sendFile(__dirname + '/views/index.html');
});




































module.exports = app;
