angular.module('main')

.controller('saveController', function($http) {

  this.handleClick = () => {
    return $http({
      method: 'POST',
      url: '/concerts',
      data: {
        showId: this.concert.Id,
        artist: this.concert.Artists[0].Name,
        date: this.concert.Date,
        venue: this.concert.Venue.Name,
        city: this.concert.Venue.City,
        state: this.concert.Venue.State,
        ticketUrl: this.concert.ticketUrl,
        saved: true
      }
    }).then((response) => {
      this.review();
      console.log(response);
    }, function errorCallBack(response) {
      console.log(response);
    });
  };

})

.component('save', {

  bindings: {
    concert: '<',
    review: '<',
    shows: '='
  },

  controller: 'saveController',
  templateUrl: './templates/save.html'
})