
/*
 * GET users listing.
 */

var User = require('../model/users');

exports.list = function(req, res){
  User.list({}, function(err, ul){
    if (err) return "Error: " + err;
    if (req.accepts('html')) {
      res.render('users', {title: 'NodeSite', users: ul});
    } else {
      res.json(ul);
    }
  });
};
