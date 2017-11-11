angular.module('main')

  .component('concertList', {
    bindings: {
      concerts: '<'
    },

    templateUrl: './templates/concertList.html'
  });
