//setup ===================================
var express = require('express');
var path = require('path');   
var PORT = process.env.PORT || 3000;            
var mongoose = require('mongoose');             // mongoose for mongodb
var morgan = require('morgan');                // log requests to the console (express4)
var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var Song = require('./model.js');

//database ==============================
mongoose.connect('mongodb://localhost/songs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo/phishly db is open');
});

//server ==================================
var app = express();                                            // create our app w/ express
app.use(express.static(path.join(__dirname, 'client')));        // set the static files location /client/
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

//get
app.get('/songs', function (req, res) {
  Song.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
    res.send(result);
  });
});

//post
app.post('/song', function (req, res) {
  var song = req.body;

  var document = new Song({
    name: song.name,
    url: song.url
  });

  console.log('this is the document from server.js 49', document);

  document.save();

  // Song.create(obj, function(err, song) {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     Song.find(function(err, songs) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         res.send(songs);
  //           //res.json(songs);???
  //       }
  //     });
  //   }
  // });
});

// app.delete('/', function (req, res) {
//   // var obj = {name: 'Bathtub Gin', url: 'http://phish.in/1997-08-17/bathtub-gin'};
//   Song.findOne(obj, function(err, song) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('delete that mofo');
//       Song.remove();
//       res.send('Delete request to homepage');
//     }
//   });
// });

app.listen(PORT, function() {
  console.log('phishly is listening on port 3000');
});
