module.exports.index = function(req, res) {

   var data = req.data;
   console.log(data);
  res.render('index', { 
    title: 'Home page', 
    data
  });
};