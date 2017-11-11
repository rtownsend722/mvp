angular.module('main')

  .component('app', {
    controller: function(musicGraphID, musicGraphSimilar) {

      this.artist = 'Beyonce';
      this.artists = window.exampleDataArray;

      this.search = () => {
        musicGraphID.search(this.artist)
        .then((response) => {
          let artistId = response.data.data[0].id;
          console.log(artistId);
          musicGraphSimilar.search(artistId)
          .then((response) => {
            console.log(response);
            this.artists = response.data.data;
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



