require('angular');

angular.module('CarToolApp')
  .factory('carsSvc', function() {

    let cars = [
      { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'white', price: 45000 },
      { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 100000 },
    ];

    return {
      all() {
        return cars.concat();
      },
      append(car) {
        cars = cars.concat({
          ...car,
          id: Math.max(...cars.map(c => c.id), 0) + 1,
        });
      },
      replace(car) {
        console.log(car);
        const carIndex = cars.findIndex(c => c.id === car.id);
        const newCars = cars.concat();
        newCars[carIndex] = car;
        cars = newCars;
      },
      remove(carId) {
        cars = cars.filter(c => c.id !== carId);
      },
    };

  });