require('angular');

angular.module('ColorToolAppModule')
  .directive('myRequired', function() {

    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(_1, _2, _3, ctrl) {
        ctrl.$validators.myRequired = function(modelValue) {

          if (ctrl.$isEmpty(modelValue)) {
            return false;
          }

          return true;
        };
      }
    };

  });