var mongoose = require('mongoose');
let Schema = mongoose.Schema;

var songSchema = new Schema({
  name: String,
  url: String,
  upvotes: { 
    type: String, 
    default: 0 
  }
});

module.exports = mongoose.model('Song', songSchema);
