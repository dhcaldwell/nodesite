"use strict";

/*
 * GET home page.
 */

var Content = require('../model/content');

exports.index = function(req, res){
  Content.list(function(err,content){
    res.render('index', { title: 'Dennis Did This', content: content });
  });
};
