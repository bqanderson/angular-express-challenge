var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var students = require('./routes/students');

var app = express();

// Static files
app.use(express.static('public'));

// Configs
app.use(bodyParser.json());

// Routers
app.use('/', index);
app.use('/students', students);

// Listening on the port of...
var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
  console.log("Ctrl-C to Quit");
})
