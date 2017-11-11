angular.module('main')

  .component('concertListItem', {
    bindings: {
      concert: '<'
    },

    templateUrl: './templates/concertListItem.html'

  });