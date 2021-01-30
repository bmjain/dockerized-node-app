var express = require('express');
var router = express.Router();

var finder = require(__dirname+'/../utils/finder');

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/


router.get('/getdata', (req,res,next) => {
   if(req.query.q) {
      var results = finder.searchData(req.query.q);
      res.send({"records": results});
   }  else {
    res.status(400).send({"message": "The server cannot process the request due to invalid syntax."});
   };
})


module.exports = router;
