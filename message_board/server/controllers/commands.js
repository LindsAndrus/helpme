var mongoose = require('mongoose');
var Messages = mongoose.model('messages');
var Comments = mongoose.model('comments');

module.exports = (function(){
  return {

    index:function(req,res){
      Messages.find({}).sort({dateAdded:-1})
      .populate('comment')
      .exec(function(err, data){
        // console.log(comments.message);
        if (err){
          res.json(err);
        }
        else {
          res.render('index.ejs', {data:data});
        };
      });
    }, //end of index function

    create:function(req,res){
      console.log("POST DATA \n\n", req.body)
      var message = new Messages({name: req.body.name, message: req.body.message})
      message.save(function(err){
        if(err){
          console.log(err);
          errmess = err.errors
          res.render('index.ejs', {errmess:errmess});
        }else{
          console.log(err);
          console.log('successful add');
          res.redirect('/');
        }
      });
    }, //end of create function

    note:function(req,res){
      console.log("POST DATA \n\n", req.body)
      Messages.findOne({_id: req.params.id}, function(err, messages){
        var comment = new Comments(req.body);
        comment._messages = message._id;
        console.log(messages);
        messages.comment.push(comment);
        comment.save(function(err){
          messages.save(function(err){
            if(err){
              console.log(err);
              // errmess = err.errors
              // res.render('index.ejs', {errmess:errmess});
            }else{
              console.log('successful add');
              res.redirect('/');
            }
          });
        });
      });
    } //end of note function
  }//end of return object
})();
