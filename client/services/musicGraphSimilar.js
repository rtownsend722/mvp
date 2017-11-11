angular.module('main')
.service('musicGraphSimilar', function($http) {
  this.search = function(id) {
    return $http({
      method: 'GET',
      url: 'http://api.musicgraph.com/api/v2/artist/' + id +'/similar',
      params: {
        api_key: window.MUSIC_GRAPH_API_KEY,
      }
    });
  }
});