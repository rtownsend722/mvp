angular.module('main')

  .component('artistList', {
    bindings: {
      artists: '<'
    },

    templateUrl: './templates/artistList.html'
  });
