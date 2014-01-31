var assert = require("assert")
var User = require('../model/user');
var Content = require('../model/content');

describe('Users', function(){
  describe('Collection', function(){
    var myList = {};
    it('myList should be an array.', function(done){
      User.list({}, function(err, data) {
        if (err) return done(err);
        assert.equal(true, data instanceof Array);
        done();
      });
    });
    it('The collection should contain test data', function(done) {
      User.list({}, function(err, data) {
        if (err) return done(err);
        assert.ok(data.length);
        done();
      })
    });
    it('We should be able to save a user.', function(done){
      var u = new User({name:'test', displayName: 'Test User',
        email: 'test@example.com', uuid:'00112299338844775566aabbccddeeff'});
      u.save(function(err){
        if (err) return done(err);
      });
      User.findByName('test', function(err,user) {
        if (err) return done(err);
        assert.equal('test', user.name);
        done();
      });
    });
  });
});

describe('Content', function(){
  it('should allow a save', function(done){
    var u = {};
    User.findByName('super', function(err,user){
      u = user;
    });
    assert.ok(u);
    var c = new Content({author: u,
                        title: 'Things I learned about Node.js today.',
                        type:'text',
                        content: 'You are better off using a lint program.'});
    assert.ok(c);
    c.save(function(err){
      if (err) return done(err);
    });
    done();
  });
});

