console.log('made it to orders BE controller');
var mongoose = require('mongoose');
var Orders = mongoose.model('orders');

module.exports = (function() {
  return {
    // EXAMPLE OF GET (INDEX) METHOD //
    index: function(req, res) {
      Orders.find({}, function(err,results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      })
    }, // END INDEX

    // EXAMPLE OF POST (CREATE) METHOD //
    create:function(req, res){
      var customer = new orders({name: req.body.name, });
      customer.save(function(err){
        if(err){
          console.log("errors")
        }else{
          console.log('success');
          res.json(customer);
        }
      })
    }, //END CREATE


    // EXAMPLE OF DELETE ONE ITEM METHOD //
    delete:function(req,res){
      console.log(req.body._id);
      Orders.remove({_id: req.body._id}, function(err){
        if(err){
          console.log('error');
        }else{
          console.log('success');
          res.json(req.body);
        }
      });
    }, //end of delete function
  } //END RETURN
})();
