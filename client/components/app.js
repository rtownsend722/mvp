angular.module('main')

  .component('app', {
    controller: function(jamBase, jamBaseConcerts, $http) {

      this.display = false;
      this.shows;
      this.artist;
      this.concerts = window.exampleDataArray;

      this.hide = () => {
        this.display = false;
      }

      this.review = () => {
        return $http({
          method: 'GET',
          url: '/concerts',
        })
        .then((response) => {
          console.log(response.data);
          this.shows = response.data;
        }, function errorCallBack(response) {
          console.log(response);
        }).then( () => {
          this.display = true;
        });
      };

      this.search = () => {
        jamBase.search(this.artist)
        .then((response) => {
          console.log(response);
          let artistId = response.data.Artists[0].Id;
          console.log(artistId)
          jamBaseConcerts.search(artistId)
          .then((response) => {
            console.log(response);
            this.concerts = response.data.Events;
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



