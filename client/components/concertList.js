angular.module('main')

  .component('concertList', {
    bindings: {
      concerts: '<',
      artist: '<',
      review: '<',
      shows: '=',
      location: '<',
      pending: '<'
    },

    templateUrl: './templates/concertList.html'
  });
