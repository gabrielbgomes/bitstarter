
var express = require('express');

 var fs = require('fs');

var app = express.createServer(express.logger());

try {
    var data = fs.readFileSync('index.html', 'ascii');
    console.log(data);
}
catch (err) {
    console.error("There was an error opening the file:");
    console.log(err);
}


app.get('/', function(request, response) {
  response.send("Hello");
});

app.get('/', function(request, response) {
  response.send("World");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
