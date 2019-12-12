require('angular');

angular.module('CarToolApp', [])
  .controller('CarToolController', ['$scope', function($scope) {

    $scope.headerText = 'Car Tool';

    $scope.cars = [
      { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'white', price: 45000 },
      { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 100000 },
    ];

    $scope.editCarId = -1;

    $scope.carForm = {
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    };

    $scope.addCar = function() {

      $scope.carForm.id = $scope.cars.length + 1;

      $scope.cars.push($scope.carForm)

      $scope.carForm = {
        make: '',
        model: '',
        year: 1900,
        color: '',
        price: 0,
      };

    };

    $scope.editCar = function(carId) {

      var carIndex = $scope.cars.findIndex(c => c.id === carId);

      $scope.editCarForm = {
        make: $scope.cars[carIndex].make,
        model: $scope.cars[carIndex].model,
        year: $scope.cars[carIndex].year,
        color: $scope.cars[carIndex].color,
        price: $scope.cars[carIndex].price,
      };

      $scope.editCarId = carId;

    };

    $scope.deleteCar = function(carId) {
      
      var carIndex = $scope.cars.findIndex(c => c.id === carId);
      $scope.cars.splice(carIndex, 1);

    };

    $scope.saveCar = function(carId) {

      var carIndex = $scope.cars.findIndex(c => c.id === carId);

      $scope.cars[carIndex].make = $scope.editCarForm.make;
      $scope.cars[carIndex].model = $scope.editCarForm.model;
      $scope.cars[carIndex].year = $scope.editCarForm.year;
      $scope.cars[carIndex].color = $scope.editCarForm.color;
      $scope.cars[carIndex].price = $scope.editCarForm.price;

      $scope.editCarId = -1;

    };

    $scope.cancelCar = function(carId) {
      $scope.editCarId = -1;
    };

  }]);

