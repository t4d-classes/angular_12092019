require('angular');

import viewCarRowTpl from './templates/car-view-row.html';
import toolHeaderTpl from './templates/tool-header.html';
import carTableTpl from './templates/car-table.html';
import carFormTpl from './templates/car-form.html';
import carToolTpl from './templates/car-tool.html';

angular.module('CarToolApp', [])
  .directive('carViewRow', function() {

    return {
      restrict: 'C',
      template: viewCarRowTpl,
      scope: {
        car: '=',
        onEditCar: '&',
        onDelete: '&',
      },
      bindToController: true,
      controllerAs: '$ctrl',
      controller: function CarViewRowController() {

        const $ctrl = this;

        $ctrl.editCar = function(carId) {
          $ctrl.onEditCar({ carId });
        };

        $ctrl.deleteCar = function(carId) {
          $ctrl.onDeleteCar({ carId });
        };

      },
    }

  })
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
  .component('carTable', {
    template: carTableTpl,
    bindings: {
      cars: '<',
      editCarId: '<',
      onEditCar: '&',
      onDeleteCar: '&',
      onSaveCar: '&',
      onCancelCar: '&',
    },
    controller: function CarTableController() {
      const $ctrl = this;
      $ctrl.editCarId = -1;
      $ctrl.editCar = function EditCar(carId) {
        $ctrl.onEditCar({ carId: carId });
        const carIndex = $ctrl.cars
          .findIndex(c => c.id === carId);
        $ctrl.editCarForm = {
          ...$ctrl.cars[carIndex],
        };
      };
      $ctrl.deleteCar = function DeleteCar(carId) {
        $ctrl.onDeleteCar({ carId: carId });
      };

      $ctrl.saveCar = function SaveCar(carId, editCarForm) {
        $ctrl.onSaveCar({
          car: {
            ...editCarForm,
            id: carId,
          },
        });
      };

      $ctrl.cancelCar = function CancelCar() {
        $ctrl.onCancelCar();
      };

    },
  })
  .directive('carForm', function() {

    return {
      restrict: 'E',
      template: carFormTpl,
      scope: {
        buttonText: '@',
        onSubmitCar: '&',
      },
      bindToController: true,
      controllerAs: 'vm',
      controller: function() {

        const vm = this;

        vm.carForm = {
          make: '',
          model: '',
          year: 1900,
          color: '',
          price: 0,
        };

        vm.submitCar = function SubmitCar() {
          vm.onSubmitCar({ car: {
            ...vm.carForm,
          } });

          vm.carForm = {
            make: '',
            model: '',
            year: 1900,
            color: '',
            price: 0,
          };
        };

      },
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
  
  
        vm.carForm = {
          make: '',
          model: '',
          year: 1900,
          color: '',
          price: 0,
        };
  
        vm.addCar = function(car) {
  
          vm.cars = vm.cars.concat({
            ...car,
            id: Math.max(...vm.cars.map(c => c.id), 0) + 1,
          });
  
        };
  
        vm.editCar = function(carId) {
          vm.editCarId = carId;
        }
  
        vm.deleteCar = function(carId) {
          vm.cars = vm.cars.filter(c => c.id !== carId);
        };
  
        vm.saveCar = function(car) {
  
          const carIndex = vm.cars
            .findIndex(c => c.id === car.id);
  
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

