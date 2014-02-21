"use strict";

var content = [];

content.push({
  author: {name: 'Anonymous', 
    displayName: 'Anonymous', 
    email: 'nobody@example.com', 
    uuid: '00000000000000000000000000000000'
  },
  created: new Date(),
  published: new Date(),
  title: 'Welcome',
  content: 'This is the home page for Dennis Did This.'
});

content.push({
  author: {name: 'Anonymous', 
    displayName: 'Anonymous', 
    email: 'nobody@example.com', 
    uuid: '00000000000000000000000000000000'
  },
  created: new Date(),
  title: 'Under Construction',
  content: "You shouldn't see this. It's under construciton and does not have a published date."
});

module.exports = Content;

function Content(obj) {
  for (var key in obj) {
    this[key] = obj[key];
  }
  this.created = this.created || new Date();
}

Content.prototype.save = function(cb) {
  content.push(this);
  cb();
};

Content.list = function(cb) {
  cb(null, content);
};

