angular.module('main')

  .component('app', {
    controller: function(musicGraph) {
      //context variables
      this.artist = '';
      this.artists = window.exampleDataArray;
      //methods
      this.search = () => {
        console.log('in the get request');
        musicGraph.search('Beyonce')
        .then((response) => {
          console.log(response.data.data[0].spotify_id);
          spotify.search(response.data.data[0].spotify_id)
          .then((response) => {
            console.log(response);
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



