angular.module('main')
.service('jamBaseConcerts', function($http) {
  this.search = function(id) {
    return $http({
      method: 'GET',
      url: 'http://api.jambase.com/events',
      params: {
        api_key: window.API_KEY,
        artistId: id,
      }
    });
  }
});