require('angular');

import toolHeaderTpl from './templates/tool-header.html';
import itemListTpl from './templates/item-list.html';
import colorFormTpl from './templates/color-form.html';
import colorToolTpl from './templates/color-tool.html';

angular
  .module('ColorToolAppModule', [])
  .component('toolHeader', {
    template: toolHeaderTpl,
    bindings: {
      headerText: '@',
    },
  })
  .component('itemList', {
    template: itemListTpl,
    bindings: {
      items: '<',
      onDeleteItem: '&',
    },
  })
  .component('colorForm', {
    template: colorFormTpl,
    bindings: {
      buttonText: '@',
      onSubmitColor: '&',
    },
    controller: function ColorFormController() {

      const $ctrl = this;

      $ctrl.$onInit = function ColorFormInit() {
        $ctrl.colorForm = {
          color: '',
        };
      };

      $ctrl.submitColor = function() {
        $ctrl.onSubmitColor({ colorData: { ...$ctrl.colorForm } });
        $ctrl.colorForm = {
          color: '',
        };
      };

    },
  })
  .component('colorTool', {
    template: colorToolTpl,
    controller: function ColorToolController() {

      var $ctrl = this;
  
      $ctrl.colors = ['red','green', 'blue'];
      
      $ctrl.addColor = function addColor(colorForm) {
        $ctrl.colors.push(colorForm.color);
      };
  
      $ctrl.deleteColor = function deleteColor(color) {
        const colorIndex = $ctrl.colors.findIndex(c => c === color);
        $ctrl.colors.splice(colorIndex, 1);
      };
  
    },
  });


angular.bootstrap(
  document.querySelector('#root'),
  ['ColorToolAppModule'],
);