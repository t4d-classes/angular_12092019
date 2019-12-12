require('angular');

function Colors() {
  this.colors = ['red', 'green', 'blue'];
}

Colors.prototype.all = function ColorsAll() {
  return this.colors.concat();
};

Colors.prototype.append = function ColorsAppend(color) {
  this.colors = this.colors.concat(color);
};

Colors.prototype.remove = function ColorsRemove(color) {
  this.colors = this.colors.filter(c => c !== color);
};

angular.module('ColorToolAppModule')
  .service('colorsSvc', Colors);
