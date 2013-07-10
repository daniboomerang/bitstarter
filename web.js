var express = require('express');
var app = express();
var fs = require('fs');
var buffer = new Buffer(256);

function readFile(filePath){
console.log("enter to my readFile");
  fs.readFile(filePath, function(err, buffer) {
    if (err) throw err;
console.log(buffer); 
  })
}

app.get('/', function(request, response) {
console.log("enter to app.get");
  len = readFile('./index.html'); 
console.log("len read:", len);
  response.send(buffer.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
