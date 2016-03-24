console.log("made it to the customer model")

var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true
  }
);

mongoose.model('customers', CustomerSchema);
