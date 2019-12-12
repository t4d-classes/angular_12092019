import carToolTpl from './car-tool.html';

angular.module('CarToolApp')
  .component('carTool', {
    template: carToolTpl,
    controller: function() {

      const $ctrl = this;

      $ctrl.cars = [
        { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'white', price: 45000 },
        { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 100000 },
      ];

      $ctrl.editCarId = -1;

      $ctrl.addCar = function AddCar(car) {

        $ctrl.cars = $ctrl.cars.concat({
          ...car,
          id: Math.max(...$ctrl.cars.map(c => c.id), 0) + 1,
        });

        $ctrl.editCarId = -1;
      };

      $ctrl.editCar = function EditCar(carId) {
        $ctrl.editCarId = carId;
      };

      $ctrl.deleteCar = function DeleteCar(carId) {
        $ctrl.cars = $ctrl.cars.filter(c => c.id !== carId);
        $ctrl.editCarId = -1;
      };

      $ctrl.saveCar = function SaveCar(car) {
        const carIndex = $ctrl.cars.findIndex(c => c.id === car.id);
        $ctrl.cars = $ctrl.cars.concat();
        $ctrl.cars[carIndex] = car;
        $ctrl.editCarId = -1;
      };

      $ctrl.cancelCar = function CancelCar() {
        $ctrl.editCarId = -1;
      };        

    },
  });
