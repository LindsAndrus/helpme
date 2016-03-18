var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messSchema = new mongoose.Schema({
 name: {
   type: String,
 },
 message: {
   type: String,
 },
 comment: {
   type: [{
     type: Schema.Types.ObjectId,
     ref: 'comments'
   }],
   default: []
 },
 dateAdded: {
   type: Date,
   default: Date.now
 }
})
messSchema.path('name').required(true, 'Name cannot be blank');
messSchema.path('message').required(true, 'Message cannot be blank');

var commSchema = new mongoose.Schema({
 comment: {
   type: String,
   default: ''
 },
 name: {
   type: String
 },
 _message: {
   type: Schema.Types.ObjectId,
   ref: 'Message'
 },
 dateAdded: {
   type: Date,
   date: Date.now
 }
})
commSchema.path('comment').required(true, 'Comment cannot be blank');

var Messages = mongoose.model('messages', messSchema);
var Comments = mongoose.model('comments', commSchema);
