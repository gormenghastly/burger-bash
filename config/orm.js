var connection = require('../config/connection.js');

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + '=' + value);
    }
  }
  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  create: function(tableInput, val, cb) {
    var queryString =
      'INSERT INTO ' + tableInput + ' (burger_name) VALUES ("' + val + '");';

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  update: function(tableInput, objColVals, condition, cb) {
    var queryString = 'UPDATE ' + tableInput + WHERE;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
