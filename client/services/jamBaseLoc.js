angular.module('main')
.service('jamBaseLoc', function($http) {
  this.search = function(zip) {
    return $http({
      method: 'GET',
      url: 'http://api.jambase.com/events',
      params: {
        api_key: window.API_KEY,
        zipCode: parseInt(zip),
      }
    });
  }
});