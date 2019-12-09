require('angular');

angular.module('CarToolApp', [])
  .controller('CarToolController',
    function($scope) {

      $scope.headerText = 'Car Tool!';

      $scope.cars = [
        { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'white', price: 45000 },
        { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 100000 },
      ];

    });

