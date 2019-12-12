require('angular');

angular.module('ColorToolApp')
  .factory('colorsData', function($http) {

    return {
      all() {

        return $http.get('http://localhost:3050/colors')
          .then(function(res) {
            return res.data; // output: array of colors
          });

      },
      append(color) {

        return $http.post(
          'http://localhost:3050/colors',
          color, // { color: 'purple' }
        )
          .then(function(res) {
            return res.data; // output: { id: 4, name: purple}
          });        

      },
    }

  });


  // function doIt(fn) {
  //   fn('test');
  // }

  // function thisIsFun(msg) {
  //   console.log(msg);
  // }

  // doIt(thisIsFun);
