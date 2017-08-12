var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, '../public/home.html'));

});

router.get('/survey', (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/survey.html'));

});

router.post('/survey', (req, res)=>{
  var total = 0;
  var keys = Object.keys(req.body);
  for (var i = 0; i < keys.length; i++) {
    total += Number(req.body[keys[i]]);
  }
  if (total > 35){
    res.sendFile(path.join(__dirname, '../public/you-like-me.html'));
  }
  else {
    res.sendFile(path.join(__dirname, '../public/dont-like-me.html'));

  }
});

module.exports = router;
