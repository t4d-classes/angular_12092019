import carTableTpl from './car-table.html';

angular.module('CarToolApp')
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

      $ctrl.editCar = function EditCar(carId) {
        $ctrl.onEditCar({ carId });
      };

      $ctrl.deleteCar = function DeleteCar(carId) {
        $ctrl.onDeleteCar({ carId });
      };

      $ctrl.saveCar = function SaveCar(car) {
        $ctrl.onSaveCar({ car });
      };

      $ctrl.cancelCar = function CancelCar() {
        $ctrl.onCancelCar();
      };
    },
  });