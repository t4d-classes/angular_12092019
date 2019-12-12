import carViewRowTpl from './car-view-row.html';

angular.module('CarToolApp')
  .directive('carViewRow', function CarViewRowDirective () {

    return {
      restrict: 'C',
      template: carViewRowTpl,
      controllerAs: '$ctrl',
      bindToController: true,
      scope: {
        car: '=',
        onEditCar: '&',
        onDeleteCar: '&',
      },
      controller: function CarViewRowController() {

        const $ctrl = this;

        $ctrl.editCar = function EditCar() {
          $ctrl.onEditCar({ carId: $ctrl.car.id });
        };

        $ctrl.deleteCar = function DeleteCar() {
          $ctrl.onDeleteCar({ carId: $ctrl.car.id });
        };

      },
    };
  });