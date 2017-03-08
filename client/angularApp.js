var app = angular.module('Phishly', ['ngSanitize']);

app.factory('songs', [function() {
  var songList = {
    songs: [
      {name: 'Bathtub Gin', url: 'http://phish.in/1997-08-17/bathtub-gin', upvotes: 0},
      {name: 'Tweezer', url: 'http://phish.in/2013-07-31/tweezer', upvotes: 5},
      {name: 'Roses are Free', url: 'http://phish.in/1998-04-03/roses-are-free', upvotes: 0},
      {name: 'ACDC Bag', url: 'http://phish.in/1999-09-14/ac-dc-bag', upvotes: 2},
      {name: 'Harry Hood', url: 'http://phish.in/1993-12-31/harry-hood', upvotes: 0},
      {name: 'Chalkdust Torture', url: 'http://phish.in/1999-07-10/chalk-dust-torture', upvotes: 7},
      {name: 'Prince Caspian', url: 'http://phish.in/2015-08-22/prince-caspian', upvotes: 0},
      {name: 'Ghost', url: 'http://phish.in/2000-05-22/ghost', upvotes: 9},
      {name: 'You Enjoy Myself', url: 'http://phish.in/1995-12-09/you-enjoy-myself', upvotes: 0}
    ]
  }
  return songList
}]);

app.controller('MainCtrl', [
  '$scope', '$sce', 'songs', '$http',

  function($scope, $sce, songs, $http) {
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };

    $scope.songs = songs.songs;

    $scope.incrementUpvotes = function(song) {
      song.upvotes += 1;
    };

    $scope.iframeUrl = '';

    $scope.iframeLoad = function(song) {
      $scope.iframeUrl = song.url;
    };

    $scope.addSong = function() {
      if (!$scope.name || $scope.name === '') {return;}
      $scope.songs.push({name: '$scope.name', url: '$scope.link', upvotes: 0})
      $scope.name = '';
      $scope.link = '';
    };
  }
]);
