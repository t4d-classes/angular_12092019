require('angular');

import colorToolTpl from './color-tool.html';

angular.module('ColorToolAppModule')
  .component('colorTool', {
    template: colorToolTpl,
    controller: ['colorsSvc', function ColorToolController(colorsSvc) {

      var $ctrl = this;

      function refreshColors() {
        return colorsSvc
          .all()
          .then(colors => $ctrl.colors = colors);
      }

      $ctrl.$onInit = function ColorToolOnInit() {
        refreshColors();
      };

      $ctrl.addColor = function addColor(colorForm) {
        colorsSvc
          .append(colorForm.color)
          .then(() => refreshColors());
      };

      $ctrl.deleteColor = function deleteColor(color) {
        colorsSvc
          .remove(color)
          .then(() => refreshColors());
      };

    }],
  });
