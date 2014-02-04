var content = [];

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

