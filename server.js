//setup ===================================
var express = require('express');
var path = require('path');
var app = express();                            // create our app w/ express
var mongoose = require('mongoose');             // mongoose for mongodb
var morgan   = require('morgan');                // log requests to the console (express4)
var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
// var database = require('./config/database');
// var port = process.env.PORT || 8888;             // set the port

//configuration ==============================
mongoose.connect('mongodb://localhost/songs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log();
});

app.use(express.static(path.join(__dirname, 'client')));         // set the static files location /client/
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// // routes ======================================================================
// require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
// app.listen(port);
// console.log("phishly is listening on port: " + port);

var songSchema = mongoose.Schema({
  name: String,
  url: String,
  upvotes: { type: String, default: 0 }
});

var Song = mongoose.model('Song', songSchema);


// var brother = new Song({
//   name: 'Brother',
//   url: 'http://phish.in/1998-04-04/brother'
// });
app.get('/', function (req, res) {
  song.find(function(err, songs) {
    if (err) {
      console.log(err)
    } else {
      console.log(songs);
    }
    res.end();
  });
});

app.post('/', function (req, res) {
  var obj = {name: 'Bathtub Gin', url: 'http://phish.in/1997-08-17/bathtub-gin'};
  song.create(obj, function(err, song) {
    if (err) {
      console.log(err);
    } else {
      console.log('got a response')
      res.end();
    }
  })
});

app.delete('/', function (req, res) {
  var obj = {name: 'Bathtub Gin', url: 'http://phish.in/1997-08-17/bathtub-gin'};
  song.find(obj, function(err, song) {
    if (err) {
      console.log(err);
    } else {
      console.log('delete that mofo');
      song.remove()
      res.send('Delete request to homepage');
    }
  })
});

app.listen(3000, function() {
  console.log('phishly is listening on port 3000')
});
