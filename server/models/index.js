var db = require('../db').db;
var models = module.exports = {

  users: {
    // Ditto as above.
    get: function (userObj, callback) {
      db.query('SELECT * from users where username = "'+userObj.username+'";', function (rows, fields) {
        if (rows.length === 0) {
          models.users.post(userObj, callback);
        } else {
          if(typeof callback === 'function') callback(rows, fields);
        }
      });
    },
    post: function (userObj, callback) {
      db.query('INSERT INTO users (username) VALUES ("'+userObj.username+'");', callback);
    }
  },

  rooms: {
    // Ditto as above.
    get: function (roomObj, callback) {
      db.query('SELECT * from rooms where roomname = "'+roomObj.roomname+'";', function (rows, fields) {
        if (rows.length === 0) {
          models.rooms.post(roomObj, callback);
        } else {
          if (typeof callback === 'function') {
            callback(rows, fields);
          }
        }
      });
    },
    post: function (roomObj, callback){
      db.query('INSERT INTO rooms (roomname) VALUES ("'+roomObj.roomname+'");', callback);
    }
  },

  messages:{
    get: function (callback) {
      db.query('SELECT messages.text, users.username, rooms.roomname, messages.createdAt FROM messages INNER JOIN users on messages.userID = users.ID INNER JOIN rooms on messages.roomID = rooms.ID', function(rows,fields){
        callback(rows,fields);
      });

    }, // a function which produces all the messages
    post: function (messageObj, callback) {
      models.users.get({username: messageObj.username}, function (rows, fields) {
        var userID = rows.insertId || rows[0].ID;
        models.rooms.get({roomname: messageObj.roomname}, function (rows, fields) {
          var roomID = rows.insertId || rows[0].ID;
          var queryString = 'INSERT INTO messages ';
          queryString += '(text,userID,roomID) ';
          queryString += 'VALUES ("'+messageObj.text+'","'+userID+'","'+roomID+'");';
          db.query(queryString , function(rows, fields){
            if (typeof callback === 'function'){
              callback(rows, fields);
            }
          });
        });
      });
    } // a function which can be used to insert a message into the database
  }
};
