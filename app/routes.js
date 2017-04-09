// var Song = require('./models/song');
//
// module.exports = function(app) {
//
//   app.get('/api/songs', function(req, res) {
//
//       // use mongoose to get all songs in the database
//       Song.find(function(err, songs) {
//
//           // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//           if (err)
//               res.send(err)
//
//           res.json(songs); // return all songs in JSON format
//       });
//   });
//
//   // create song and send back all songs after creation
//   app.post('/api/songs', function(req, res) {
//
//       // create a song, information comes from AJAX request from Angular
//       Song.create({
//           name : req.body.name,
//           url : req.body.url
//       }, function(err, song) {
//           if (err)
//               res.send(err);
//
//           // get and return all the songs after you create another
//           Song.find(function(err, songs) {
//               if (err)
//                   res.send(err)
//               res.json(songs);
//           });
//       });
//   });
//
//   // delete a song
//   app.delete('/api/songs/:song_id', function(req, res) {
//       Song.remove({
//           _id : req.params.song_id
//       }, function(err, song) {
//           if (err)
//               res.send(err);
//
//           // get and return all the songs after you create another
//           Song.find(function(err, songs) {
//               if (err)
//                   res.send(err)
//               res.json(songs);
//           });
//       });
//   });
// };
