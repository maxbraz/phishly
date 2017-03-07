var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
  name: String,
  url: String,
  upvotes: {type: number, default: 0}
});

mongoose.model('Song', SongSchema);
