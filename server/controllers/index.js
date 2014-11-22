var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(rows,fields){
        res.status(200).type('application/json').send(JSON.stringify({results:rows}));
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = {username: req.param('username'), text: req.param('text'), roomname: req.param('roomname')};
      models.messages.post(message, function(){
        res.status(201).end();
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      models.users.post({name: req.param('username')});
      res.status(201).end();
    }
  }
};

