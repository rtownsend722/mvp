angular.module('main')
.service('musicGraph', function($http) {
  this.search = function(prefix) {
    console.log(window.MUSIC_GRAPH_API_KEY);
    return $http({
      method: 'GET',
      //DELETE THIS LINE BEFORE SAVING TO GITHUB
      url: 'http://api.musicgraph.com/api/v2/artist/suggest',
      params: {
        api_key: window.MUSIC_GRAPH_API_KEY,
        prefix: prefix,
      }
    });
  }
});