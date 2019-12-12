require('angular');

angular.module('ColorToolAppModule')
  .value('colorsSvc', {
    _colors: ['red', 'green', 'blue'],
    all() {
      return this._colors.concat();
    },
    append(color) {
      this._colors = this._colors.concat(color);
    },
    remove(color) {
      this._colors = this._colors.filter(c => c !== color);
    },
  });
  