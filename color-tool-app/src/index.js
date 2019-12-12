require('angular');

import toolHeaderTpl from './templates/tool-header.html';
import colorToolTpl from './templates/color-tool.html';

// function ColorToolController(colorsData) {

//   const vm = this;

//   vm.headerText = 'Color Tool';

//   vm.colors = colorsData.all();

//   vm.addColor = function(colorData) {
//     vm.colors.push(colorData.color);
//   };

// }

// ColorToolController.$inject = ['colorsData'];

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
      controller: ['colorsData', function ColorToolController(colorsData) {

        const vm = this;

        vm.headerText = 'Color Tool';

        // async/promise call
        colorsData.all().then(colors => {
          vm.colors = colors;
        });

        // original
        // vm.colors = colorsData.all();
  
        vm.addColor = function(colorForm) {

          colorsData
            .append({ name: colorForm.color })
            .then(() => colorsData.all())
            .then(colors => vm.colors = colors);
        };

      }],
    };
  });

require('./services/colors-data');
require('./directives/text-list');
require('./directives/color-form');
