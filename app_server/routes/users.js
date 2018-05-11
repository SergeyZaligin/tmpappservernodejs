var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var user_data = require('./user_data');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  var data = req.data;
  if(data.user.is_authenticated){
    res.redirect('/');
  }else{
    res.render('login', { title: 'Login page' });
  }
  
});

router.post('/login', function(req, res, next) {

  var form = new multiparty.Form();

  form.parse(req, function(err, fields, files) {

    if(fields){

      var login = fields.login[0];
      console.log('login', login);
      var password = fields.password[0];
      console.log('password', password);
      if(login && password){

        var user_result = user_data.check_login(login, password);

        console.log('user_result', user_result);

        if(user_result.is_authenticated == true){
          var secret = req.app.get('secret');
          var token = user_data.get_token(user_result, secret);

          res.cookie('auth_token', token);
          console.log(token);
          res.redirect('/');
        }
      }
    }
    res.render("login", {title: "Logon err", infoError: 'info error'});
  });

});


module.exports = router;
