require('angular');

angular.module('CarToolApp', [])
  .controller('CarToolController',
    function($scope) {

      $scope.headerText = 'Car Tool!';

      $scope.cars = [
        { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'white', price: 45000 },
        { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 100000 },
      ];

      $scope.editCarId = 2;

      $scope.carForm = {
        make: '',
        model: '',
        year: 1900,
        color: '',
        price: 0,
      };

      // $scope.editCarForm = {
      //   make: $scope.cars[1].make,
      // };

      $scope.addCar = function(carForm) {

        const car = {
          ...carForm,
          id: Math.max(...$scope.cars.map(c => c.id), 0) + 1,
        };

        $scope.cars = $scope.cars.concat(car);

      };

      $scope.deleteCar = function(carId) {

        $scope.cars = $scope.cars.filter(c => c.id !== carId);

      };

    });

