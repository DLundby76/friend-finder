var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// create out express instance
var app = express();

// setting the port

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('server started on port:' + port);
});
