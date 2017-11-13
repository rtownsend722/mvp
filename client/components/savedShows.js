angular.module('main')

.controller('deleteController', function($http) {

  this.remove = () => {
    console.log(this.show);
    return $http({
      method: 'POST',
      url: '/delete',
      data: {
        showId: this.show.showId
      }
    }).then((response) => {
      this.review();
      console.log(response);
    }, function errorCallBack(response) {
      console.log(response);
    });
  }

})

.component('savedShows', {
  bindings: {
    show: '<',
    shows: '=',
    review: '<',
    display: '='
  },

  controller: 'deleteController',
  templateUrl: './templates/savedShows.html'
});