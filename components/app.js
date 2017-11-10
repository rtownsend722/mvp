angular.module('main')

  .component('app', {
    controller: function() {
      //context variables
      this.artists = window.exampleDataArray;
      //methods
    },

    templateUrl: './templates/app.html'
  });



