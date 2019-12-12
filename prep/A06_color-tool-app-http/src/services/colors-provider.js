require('angular');

angular.module('ColorToolAppModule')
  .provider('colorsSvc', function ColorsProvider() {

    return {
      $get: function ColorsSvc$Get() {

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
      },
    };

  });