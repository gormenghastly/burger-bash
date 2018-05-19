// set up mysql connection
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'burgerBash_db'
  });
}
connection.connect(function(err) {
  if (err) {
    console.error('error connecting');
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
