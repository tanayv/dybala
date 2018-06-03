var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

var app = express();

var port = process.env.PORT || 8000;

/* Test authentication endpoint */
app.get("/api/auth", function(req, res) {
  if (req.query.username == "bishk") {
    res.json({
      "email": "bishk@email.com",
      "name": "Taboriwala Ghajar",
    })
  }
  else
  res.json({
    "status": "403 user not found",
  })
});

app.use(express.static(path.join(__dirname, "frontend", 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});





app.listen(port, function() {
    console.log(`api running on port ${port}`);
});