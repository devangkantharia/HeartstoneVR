var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/games/:gameName', function(req, res, next) {

  //res.render('gameScene', { title: 'gameScene'});
  res.render('scene', { title: 'Scene' });
});


module.exports = router;
