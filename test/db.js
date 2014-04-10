var assert = require('assert');
var db = require('../lib/db');

describe('Db', function(){
  var userId;

  it('Database should open', function(done) {
    db.open(done);
  });
  it('insertOne should add an object.', function(done) {
    var obj = {
      name: 'Teddy',
      email: 'teddy@example.com'
    };
    db.insertOne('users', obj, function(err, user) {
      if (err) return done(err);
      assert.ok(user);
      console.log(JSON.stringify(user)); 
      assert.ok(user.name);
      assert.ok(user._id);
      userId = user._id;
      done();
    });
  });
  it('findOne should locate new user.', function(done) {
    console.log('Looking for user id ' + userId);
    db.findOne('users', {'_id': userId}, function(err, user){
      if (err) return done(err);
      assert.ok(user);
    });
    done();
  });
  it('Database should close cleanly.', function(done){
    db.close(function(err,results){
      if (err) return done(err);
    });
    done();
  });
});
