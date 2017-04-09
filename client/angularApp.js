var app = angular.module('app', ['ngSanitize']);

app.controller('MainCtrl', function($scope, $sce, SongService) {
    
  $scope.songList = [];

  $scope.init = function() {
    $scope.getSongs();
  };
  
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };

  $scope.iframeUrl = '';

  $scope.iframeLoad = function(song) {
    $scope.iframeUrl = song.url;
  };

  // $scope.songs = songs.songs;

  $scope.postSong = function(name, url) {
    var data = {
      name: name,
      url: url
    };

    SongService.post(data);
  };

  $scope.getSongs = function() {
    SongService.get().then(function(data) {
      $scope.songList = data.data;
    });
  };
  $scope.incrementUpvotes = function(song) {
    song.upvotes += 1;
  };
});

app.service('SongService', function($http) {
  this.post = function(data) {
    return $http({
      method: 'POST',
      url: '/song',
      data: data
    });
  };

  this.get = function() {
    return $http({
      method: 'GET',
      url: '/songs'
    });
  };
});
