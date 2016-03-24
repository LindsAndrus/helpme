console.log("made it to the model")

var mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema(
  {
    name:
    {
      type: String,
      // unique: true
    },
    age:
    {
      type: Number,
      // validate: xxxxx
    }
  },
  {
    timestamp:
    {
      createAt:'created_at',
      updatedAt:'updated_at'
    }
  }
);

mongoose.model('dBoard', BoardSchema);
