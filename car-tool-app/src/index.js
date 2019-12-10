require('angular');

import toolHeaderTpl from './templates/tool-header.html';
import carTableTpl from './templates/car-table.html';
import carToolTpl from './templates/car-tool.html';

angular.module('CarToolApp', [])
  .directive('toolHeader', function() {

    return {
      restrict: 'E',
      template: toolHeaderTpl,
      scope: {
        headerText: '@',
      },
      bindToController: true,
      // bindToController does this
      // controller: function($scope) {
      //   const vm = this;
      //   vm.headerText = $scope.headerText;
      // },
      controllerAs: 'vm',
      controller: function() { },
    };

  })
  .directive('carTable', function() {

    return {
      restrict: 'E',
      template: carTableTpl,
      scope: {
        // this is ok for AngularJS < 1.5, but in general
        // this is evil
        cars: '=',
        editCarId: '=',
      },
      bindToController: true,
      controllerAs: 'vm',
      controller: function() { },
    };

  })
  .directive('carTool', function() {

    return {
      restrict: 'E',
      template: carToolTpl,
      scope: { },
      bindToController: true,
      controllerAs: 'vm',
      controller: function() {

        const vm = this;

        vm.cars = [
          { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'white', price: 45000 },
          { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 100000 },
        ];
  
        vm.editCarId = -1;
  
        vm.carForm = {
          make: '',
          model: '',
          year: 1900,
          color: '',
          price: 0,
        };
  
        vm.addCar = function(carForm) {
  
          const car = {
            ...carForm,
            id: Math.max(...vm.cars.map(c => c.id), 0) + 1,
          };
  
          vm.cars = vm.cars.concat(car);
  
        };
  
        vm.editCar = function(carId) {
  
          const carIndex = vm.cars.findIndex(c => c.id === carId);
  
          vm.editCarForm = {
            ...vm.cars[carIndex],
          };
  
          vm.editCarId = carId;
        }
  
        vm.deleteCar = function(carId) {
          vm.cars = vm.cars.filter(c => c.id !== carId);
        };
  
        vm.saveCar = function(carId, editCarForm) {
          const car = {
            ...editCarForm,
            id: carId,
          };
  
          const carIndex = vm.cars.findIndex(c => c.id === carId);
  
          vm.cars = vm.cars.concat();
          vm.cars[carIndex] = car;
          vm.editCarId = -1;
        };
  
        vm.cancelCar = function() {
          vm.editCarId = -1;
        };        

      },
    };

  });

