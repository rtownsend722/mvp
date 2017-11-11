angular.module('main')
.service('musicGraphID', function($http) {
  this.search = function(prefix) {
    return $http({
      method: 'GET',
      url: 'http://api.musicgraph.com/api/v2/artist/suggest',
      params: {
        api_key: window.MUSIC_GRAPH_API_KEY,
        prefix: prefix,
      }
    });
  }
});