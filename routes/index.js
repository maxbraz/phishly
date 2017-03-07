var express = require('express');
var router = express.Router();
var Song = mongoose.model('Song');

/* GET home page. */
router.get('/songs', function(req, res, next) {
  Song.find(function(err, songs) {
    if (err) {return next(err); }

    res.json(songs);
  });
});

router.post('/songs', function(req, res, next) {
  var song = new Song(req.body);

  song.save(function(err, post) {
    if (err) { return next(err); }

    res.json(song)
  })
})

module.exports = router;
