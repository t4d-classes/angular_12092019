import carFormTpl from './car-form.html';

angular.module('CarToolApp')
  .component('carForm', {
    template: carFormTpl,
    bindings: {
      buttonText: '@',
      onSubmitCar: '&',
    },
    controller: function CarFormController() {

      const $ctrl = this;

      $ctrl.$onInit = function CarFormOnInit() {
        $ctrl.carForm = {
          make: '',
          model: '',
          year: 1900,
          color: '',
          price: 0,
        };
      };

      $ctrl.submitCar = function() {

        $ctrl.onSubmitCar({ car: { ...$ctrl.carForm } });

        $ctrl.carForm = {
          make: '',
          model: '',
          year: 1900,
          color: '',
          price: 0,
        };
      };

    }
  });