require('angular');

import viewCarRowTpl from './templates/car-view-row.html';
import editCarRowTpl from './templates/car-edit-row.html';
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
        onDeleteCar: '&',
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
    };

  })
  .directive('carEditRow', function() {

    return {
      restrict: 'C',
      template: editCarRowTpl,
      scope: {
        car: '=',
        onSaveCar: '&',
        onCancelCar: '&',
      },
      bindToController: true,
      controllerAs: '$ctrl',
      controller: function CarEditRowController() {

        const $ctrl = this;

        $ctrl.$onInit = function CarEditRowInit() {
          $ctrl.editCarForm = {
            ...$ctrl.car,
          };          
        };

        $ctrl.saveCar = function SaveCar() {
          $ctrl.onSaveCar({ car: {
            ...$ctrl.editCarForm,
            id: $ctrl.car.id,
          } });
        };

        $ctrl.cancelCar = function CancelCar(carId) {
          $ctrl.onCancelCar();
        };

      },
    };

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

      $ctrl.saveCar = function SaveCar(car) {
        $ctrl.onSaveCar({ car });
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
      controller: ['carsSvc', function(carsSvc) {

        const vm = this;

        function refreshCars() {
          return carsSvc
            .all()
            .then(cars => {
              vm.cars = cars;
              vm.editCarId = -1;
            });
        }

        refreshCars();
  
        vm.carForm = {
          make: '',
          model: '',
          year: 1900,
          color: '',
          price: 0,
        };
  
        vm.addCar = function(car) {
          carsSvc.append(car)
            .then(() => {
              refreshCars();
            });
        };
  
        vm.editCar = function(carId) {
          vm.editCarId = carId;
        }
  
        vm.deleteCar = function(carId) {
          carsSvc.remove(carId)
            .then(() => {
              refreshCars();
            });
        };
  
        vm.saveCar = function(car) {
          carsSvc.replace(car)
            .then(() => {
              refreshCars();
            });
        };
  
        vm.cancelCar = function() {
          vm.editCarId = -1;
        };        

      }],
    };

  });

require('./services/cars-svc');
