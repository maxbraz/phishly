var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/songs');

var db = mongoose.connection;

var songSchema = mongoose.Schema({
  name: String,
  url: String,
  upvotes: { type: String, default: 0 }
});

var Song = mongoose.model('Song', songSchema);

var brother = new Song({
  name: 'Brother',
  url: 'http://phish.in/1998-04-04/brother'
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

app.use(express.static(path.join(__dirname, 'client')));

// app.get('/', function(req, res) {
//   // res.render('/index.html')
//   res.sendFile('index.html', {root : __dirname + '/'});
// });
//
// app.post('/', function(req, res) {
//   res.send('Got a Post request');
// });
//
// app.put('/user', function(req, res) {
//   res.send('Got a PUT request at /user');
// });
//
// app.delete('/user', function(req, res) {
//   res.send('Got a DELETE request at /user');
// });

app.listen(3000, function() {
  console.log('phishly is listening on port 3000')
});
