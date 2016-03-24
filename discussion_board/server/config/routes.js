var Board = require('./../controllers/dBoards.js');
console.log(Board);
// catch $http requests made by our Factory or typed into our browser as a GET
// exports = link to server (controller) and returns whatever comes after '='
module.exports = function(app){
  app.get('/boards', Board.get);
  app.post('/boards', Board.create);
  app.get('/', function(req,res){
    res.send('index.html');
  });
  // app.post('/boards/:id', Board.update);
  // app.get('/boards/:id/destroy', Board.delete);
};
