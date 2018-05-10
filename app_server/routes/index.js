var express = require('express');
var router = express.Router();
var controllerMain = require('../controllers/main.js');

/* GET home page. */
router.get('/', controllerMain.index);

router.get('/messages', function(req, res, next) {
    
    var data = req.data;
    //console.log(data);
    res.render('messages_test', 
    // { user: 
    //   {username: 'User', roles: ['r1','r2','r3']} 
    // }
    data
  );
});
module.exports = router;
