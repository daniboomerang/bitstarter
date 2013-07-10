var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var buffer = new Buffer(256);

app.get('/', function(request, response) {
  buffer = fs.readFileSync('./index.html'); 
  response.send(buffer.toString('utf8', 0, buffer.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
