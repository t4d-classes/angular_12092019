require('angular');

function Colors($http) {
  this.$http = $http;
}

Colors.prototype.all = function ColorsAll() {
  return this.$http
    .get('http://localhost:3050/colors')
    .then(res => res.data);
};

Colors.prototype.append = function ColorsAppend(color) {
  return this.$http
    .post('http://localhost:3050/colors', { name: color })
    .then(res => res.data);
};

Colors.prototype.remove = function ColorsRemove(colorId) {
  return this.$http
    .delete('http://localhost:3050/colors/' + encodeURIComponent(colorId))
    .then(res => res.data);
};

angular.module('ColorToolAppModule')
  .service('colorsSvc', Colors);
