require('angular');

angular.module('CarToolApp')
  .factory('carsSvc', function($http) {

    return {
      all() {
        return $http.get('http://localhost:3050/cars')
          .then(function(res) {
            return res.data;
          });
      },
      append(car) {
        return $http.post(
          'http://localhost:3050/cars',
          car,
        )
          .then(function(res) {
            return res.data;
          });        
      },
      replace(car) {
        return $http.put(
          'http://localhost:3050/cars/' + encodeURIComponent(car.id),
          car,
        )
          .then(function(res) {
            return res.data;
          });        
      },
      remove(carId) {
        return $http.delete(
          'http://localhost:3050/cars/' + encodeURIComponent(carId),
        )
          .then(function(res) {
            return res.data;
          });        
      },
    };

  });