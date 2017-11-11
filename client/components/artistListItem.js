angular.module('main')

  .component('artistListItem', {
    bindings: {
      artist: '<'
    },

    templateUrl: './templates/artistListItem.html'

  });