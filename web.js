var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buff = fs.readFileSync('index.html');
var out = buff.toString()

app.get('/', function(request, response) {
  response.send(out);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
