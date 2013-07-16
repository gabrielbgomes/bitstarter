
var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
<<<<<<< HEAD
  var fs = require('fs');
  var content = fs.readFileSync('index.html', 'utf-8');
  response.send(content);
=======
  response.send('Hello World 2!');
>>>>>>> 75cbd785019766442e393c6f3141f66864ec3ca7
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
