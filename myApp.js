var express = require('express');
var app = express();


// Log hellow world to the console
console.log("Hello World");

// Serve static files..
// Normal usage
// app.use(express.static(__dirname + "/public"));


app
  // A middleware logger
  .use((req, _, next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
  })

  // Assets at the /public route
  .use("/public", express.static(__dirname + "/public"))

  // Middleware Chaining...
  .get('/now', (req, _, next) => {
    const t = new Date();
    req.initialTime = t.toString();
    t.setSeconds(t.getSeconds() + 20);
    req.time = t.toString();
    next();
  }, (req, res) => {
    res.json({ before: req.initialTime, time: req.time });
  })

  // json route
  .get('/json', (_, res) => {
    const text = process.env.MESSAGE_STYLE == 'uppercase' ? "HELLO JSON" : "Hello json";
    res.json({ "message": text });
  })

  // Echo Server
  .get('/:word/echo', (req, res) => {
    res.json({ echo: req.params?.word });
  })

  // Query params
  // .route('/name')
  // .get((req, res) => {
  //   res.json({ name: req.query?.first + ' ' + req.query?.last });
  // }).post((req, res) => {

  // })
  .get('/name', (req, res) => {
    res.json({ name: req.query?.first + ' ' + req.query?.last });
  })

  // index route
  .get('/', (_, res) => {
    // Send a static string response
    // res.send('Hello Express');

    // Respond with a file.
    res.sendFile(__dirname + '/views/index.html');
  });




































module.exports = app;
