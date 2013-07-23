var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer("Hello World from index.html", 25);
  var data = fs.readFileSync("index.html", "utf-8");
  response.send(data);;
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
