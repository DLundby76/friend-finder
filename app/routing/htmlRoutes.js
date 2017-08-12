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
    console.log(req.body);
  res.sendFile(path.join(__dirname, '../public/survey.html'));


});

module.exports = router;
