require('angular');

angular.module('ColorToolApp', [])
  .controller('ColorToolController',
    function($scope, $timeout) {

      $timeout(() => {
        $scope.colors.push('purple');
        console.log($scope.colors);
      }, 5000);

      $scope.headerText = 'Color Tool!';

      $scope.colors = [
        'red',
        'green',
        'blue',
      ];

      $scope.colorForm = {
        color: '',
      };

      $scope.addColor = function() {
        $scope.colors.push($scope.colorForm.color);
        $scope.colorForm.color = '';
      };

    });

