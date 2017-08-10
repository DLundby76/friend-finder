var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var htmlRouter = require('./app/routing/htmlRoutes')
// create out express instance
var app = express();

// setting the port

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'app/public')));
app.use('/', htmlRouter);

app.listen(port, function(){
  console.log('server started on port:' + port);
});
