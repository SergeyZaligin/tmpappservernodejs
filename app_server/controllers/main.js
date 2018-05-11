module.exports.index = function(req, res) {

   var data = req.data;
  res.render('index', { 
    title: 'Home page', 
    data
  });
};