
var express = require('express');

 var fs = require('fs');

var app = express.createServer(express.logger());

try {
    var data = fs.readFileSync('index.html', 'ascii');
    response.send(data); //console.log(data);
}
catch (err) {
    console.error("There was an error opening the file:");
    response.send(err); //console.log(err);
}


app.get('/', function(request, response) {
  response.send("Hello 2");
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
