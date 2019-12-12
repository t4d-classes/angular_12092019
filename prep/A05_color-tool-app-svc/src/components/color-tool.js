require('angular');

import colorToolTpl from './color-tool.html';

angular.module('ColorToolAppModule')
  .component('colorTool', {
    template: colorToolTpl,
    controller: ['colorsSvc', function ColorToolController(colorsSvc) {

      var $ctrl = this;

      $ctrl.colors = colorsSvc.all();
      
      $ctrl.addColor = function addColor(colorForm) {
        colorsSvc.append(colorForm.color);
        $ctrl.colors = colorsSvc.all();
      };

      $ctrl.deleteColor = function deleteColor(color) {
        colorsSvc.remove(color);
        $ctrl.colors = colorsSvc.all();
      };

    }],
  });
