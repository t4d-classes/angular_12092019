require('angular');

import toolHeaderTpl from './templates/tool-header.html';
import colorToolTpl from './templates/color-tool.html';

angular.module('ColorToolApp', [])
  .component('toolHeader', {
    template: toolHeaderTpl,
    bindings: {
      headerText: '@',
    },
  })
  .directive('colorTool', function() {
    return {
      restrict: 'E',
      template: colorToolTpl,
      controllerAs: 'vm',
      scope: {},
      controller: function() {

        const vm = this;

        vm.headerText = 'Color Tool';

        vm.colors = [
          'red',
          'green',
          'blue',
        ];
  
        vm.addColor = function(colorData) {
          vm.colors.push(colorData.color);
        };

      },
    };
  });

require('./directives/text-list');
require('./directives/color-form');
