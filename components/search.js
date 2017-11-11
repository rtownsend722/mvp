angular.module('main')

  .component('search', {
    bindings: {
      search: '<',
      artist: '='
    },

    templateUrl: './templates/search.html'
  });

