require('angular');

angular.module('ColorToolAppModule')
  .factory('colorsSvc', function Colors() {

    let colors = ['red', 'green', 'blue'];

    return {
      all() {
        return colors.concat();

      },
      append(color) {
        colors = colors.concat(color);
      },
      remove(color) {
        colors = colors.filter(c => c !== color);
      },
    };

  });