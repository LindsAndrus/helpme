console.log("made it to the order model")

var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema(
  {
    name: String,
    quantity: Number,
  },
  {
    timestamps: true
  }
);

mongoose.model('orders', OrderSchema);
