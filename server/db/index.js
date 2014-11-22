var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'chat_test', // 'chat' or 'chat_test'
});


var db = {};
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

db.query = function(str, callback){
  connection.query(str, function(err, rows, fields) {
    if (err) throw err;
    if(typeof callback === 'function'){
      callback(rows, fields);
    }
  });
};

module.exports.db = db;
