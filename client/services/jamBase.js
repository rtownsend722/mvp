angular.module('main')
.service('jamBase', function($http) {
  this.search = function(name) {
    return $http({
      method: 'GET',
      url: 'http://api.jambase.com/artists',
      params: {
        api_key: window.API_KEY,
        name: name,
      }
    });
  }
});