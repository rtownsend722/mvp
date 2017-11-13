angular.module('main')

  .component('concertList', {
    bindings: {
      concerts: '<',
      artist: '<',
      review: '<',
      shows: '='
    },

    templateUrl: './templates/concertList.html'
  });
