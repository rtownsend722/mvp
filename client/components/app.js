angular.module('main')

  .component('app', {
    controller: function(jamBase, jamBaseConcerts) {

      this.artist = 'Phish';
      this.concerts = window.exampleDataArray;

      this.search = () => {
        jamBase.search(this.artist)
        .then((response) => {
          console.log(response);
          let artistId = response.data.Artists[0].Id;
          console.log(artistId)
          jamBaseConcerts.search(artistId)
          .then((response) => {
            console.log(response);
            this.artists = response.data.Events;
          }, function errorCallBack(response) {
            console.log(response);
          });
        }, function errorCallBack(response) {
          console.log(response);
        });
        
      };
    },

    templateUrl: './templates/app.html'
  });



