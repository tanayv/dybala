var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

var app = express();

var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "frontend", 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, function() {
    console.log(`api running on port ${port}`);
});