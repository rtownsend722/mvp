angular.module('main')

  .component('search', {
    bindings: {
      search: '<',
      zip: '<',
      artist: '=',
      location: '='
    },

    templateUrl: './templates/search.html'
  });

