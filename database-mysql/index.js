var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'illyayanchuk',
  // password : 'Married2017!',
  database : 'test'
});

connection.connect();

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
