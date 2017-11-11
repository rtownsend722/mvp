angular.module('main')
.service('spotify', function($http) {
  this.search = function(id) {
    return $http({
      method: 'GET',
      url: 'https://api.spotify.com/v1/artists/{id}/related-artists',
      params: {
        Authorization: window.SPOTIFY_API_KEY,
        id: id
      }
    });
  }
})