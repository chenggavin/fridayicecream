var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/')); //looking for index.html if index.html is in app folder.

app.listen(port, function() {
  console.log('I am listening on port 3000!');
  console.log("__dirname ", __dirname);
});
