require('angular');

// function ColorsData() {

//   this._colors = ['red', 'green', 'blue'];
// }

// ColorsData.prototype.all = function() {
//   return this._colors.concat();
// };

// ColorsData.prototype.append = function(color) {
//   this._colors = this._colors.concat(color);
// }

class ColorsData {
  constructor() {
    this._colors  = ['red', 'green', 'blue'];
  }

  all() {
    return this._colors.concat();
  };
  
  append(color) {
    this._colors = this._colors.concat(color);
  }
}

angular.module('ColorToolApp')
  .value('colorsData', new ColorsData());
  // .service('colorsData', ColorsData)
  // .factory('colorsData', function() {

  //   var colors = ['red', 'green', 'blue'];

  //   return {
  //     all() {
  //       return colors.concat();
  //     },
  //     append(color) {
  //       colors = colors.concat(color);
  //     },
  //     remove(color) {
  //       colors = colors.filter(c => c !== color);
  //     },
  //   };

  // })
  // .provider('colorsData', function() {

  //   // provider
  //   return {

  //     // $get function is the factory function
  //     $get: function() {

  //       // service based approach
  //       return new ColorsData();

  //       // var colors = ['red', 'green', 'blue'];

  //       // return {
  //       //   all() {
  //       //     return colors.concat();
  //       //   },
  //       //   append(color) {
  //       //     colors = colors.concat(color);
  //       //   },
  //       //   remove(color) {
  //       //     colors = colors.filter(c => c !== color);
  //       //   },
  //       // };
    
  //     },
  //   };


  // });  