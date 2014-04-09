"use strict";

var uuidGen = require('node-uuid');

var users = [];
users.push(new User({
  name: 'super',
  displayName: 'Super User',
  email: 'super@example.com',
  uuid: '00112233445566778899aabbccddeeff'
}));
users.push(new User({
  name: 'guest',
  displayName: 'Anonymous Guest',
  email: 'guest@localhost.com',
  uuid: 'ffeeddccbbaa00998877665544332211'
}));

module.exports = User;

function User(obj) {
  for (var key in obj) {
    this[key] = obj[key];
  }
}

User.prototype.save = function(cb) {
  if (this.uuid === undefined || this.uuid === -1)
    this.uuid = uuidGen.v4();
  users.push(this);
  cb();
};

User.list = function(filter, cb) {
  cb(null, users);
};

User.findByName = function(userName, cb) {
  var user = {};
  for (var i = 0; i < users.length; i++) {
    if (users[i].name == userName) user = users[i];
  }
  cb(null, user);
};

