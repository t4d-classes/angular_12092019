require('angular');

angular
  .module('ColorToolAppModule', [])
  .controller('ColorToolController', function($scope) {

    $scope.headerText = 'Color Tool';
    $scope.colors = ['red','green', 'blue'];
    
    $scope.colorForm = {
      color: '',
    };

    $scope.addColor = function() {
      $scope.colors.push($scope.colorForm.color);
    };

    $scope.deleteColor = function (color) {
      const colorIndex = $scope.colors.findIndex(c => c === color);
      $scope.colors.splice(colorIndex, 1);
    };

  });


angular.bootstrap(
  document.querySelector('#root'),
  ['ColorToolAppModule'],
);