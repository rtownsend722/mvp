angular.module('main')

  .component('concertListItem', {
    bindings: {
      concert: '<',
      shows: '=',
      review: '<'
    },

    templateUrl: './templates/concertListItem.html'

  });