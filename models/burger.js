var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.all('burgers', function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create('burgers', name, function(res) {
      cb(res);
    });
  },
  update: function(id, condition, cb) {
    orm.update('burgers', id, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
