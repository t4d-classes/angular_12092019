require('angular');

angular.module('ColorToolApp', [])
  .controller('ColorToolController',
    function($scope) {

      $scope.headerText = 'Color Tool!';

      $scope.colors = [
        'red',
        'green',
        'blue',
      ];

    });

