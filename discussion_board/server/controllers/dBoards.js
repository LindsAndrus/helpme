console.log('made it to BE controller');
var mongoose = require('mongoose');
var Board = mongoose.model('dBoard');

module.exports = (function() {
  return {
    // EXAMPLE OF GET (INDEX) METHOD //
    index: function(req, res) {
      // dBoard.find({}, function(err, results) {
      //   if(err) {
      //     console.log(err);
      //     return;
      //   }
      //     res.json(results);
      // })
    }, // END INDEX
  } //END RETURN
})();
