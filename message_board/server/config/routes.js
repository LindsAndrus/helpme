var Users = require('./../controllers/commands.js');

module.exports = function(app){
  app.get('/', Users.index);
  app.post('/messages', Users.create);
  app.post('/comments/:id', Users.note);
};
