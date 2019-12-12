import carEditRowTpl from './car-edit-row.html';

angular.module('CarToolApp')
  .directive('carEditRow', function() {

    return {
      restrict: 'C',
      template: carEditRowTpl,
      controllerAs: '$ctrl',
      bindToController: true,
      scope: {
        car: '=',
        onSaveCar: '&',
        onCancelCar: '&',
      },
      controller: function CarEditRowController() {

        const $ctrl = this;

        $ctrl.$onInit = function CarEditRowOnInit() {
          $ctrl.editCarForm = {
            make: $ctrl.car.make,
            model: $ctrl.car.model,
            year: $ctrl.car.year,
            color: $ctrl.car.color,
            price: $ctrl.car.price,
          };
        };

        $ctrl.saveCar = function SaveCar() {

          $ctrl.onSaveCar({
            car: {
              ...$ctrl.editCarForm,
              id: $ctrl.car.id,
            }
          });

        };

        $ctrl.cancelCar = function CancelCar() {

          $ctrl.onCancelCar();
        
        };

      }
    };
  });