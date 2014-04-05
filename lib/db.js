'use strict';

var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;

/*jshint -W069 */
var envHost = process.env['MONGO_NODE_DRIVER_HOST'];
var envPort = process.env['MONGO_NODE_DRIVER_PORT'];

var host = envHost || 'localhost';
var port = envPort || Connection.DEFAULT_PORT;

var db = new Db('nodesite', new Server(host, port, {}), {safe:true,native_parser:false});

module.exports = {
  find: function(name, query, limit, callback) {
    db.collection(name).find(query)
      .sort({_id: -1})
      .limit(limit)
      .toArray(callback);
  },
  findOne: function(name, query, callback) {
    db.collection(name).findOne(query, callback);
  },
  insert: function(name, items, callback) {
    db.collection(name).insert(items, {w:1}, callback);
  },
  insertOne: function(name, item, callback) {
    module.exports.insert(name, item, function(err, items) {
      callback(err, items[0]);
    });
  },
  open: function(callback) {
    db.open(callback);
  },
  close: function(callback) {
    db.close(callback);
  }
};

