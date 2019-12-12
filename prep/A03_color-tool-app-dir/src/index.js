require('angular');

import toolHeaderTpl from './templates/tool-header.html';
import itemListTpl from './templates/item-list.html';
import colorFormTpl from './templates/color-form.html';
import colorToolTpl from './templates/color-tool.html';

angular
  .module('ColorToolAppModule', [])
  .directive('toolHeader', function() {

    return {
      restrict: 'E',
      template: toolHeaderTpl,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        headerText: '@',
      },
      controller: function ToolHeaderController() { },
    };

  })
  .directive('itemList', function() {

    return {
      restrict: 'E',
      template: itemListTpl,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        items: '=',
        onDeleteItem: '&',
      },
      controller: function ItemListController() { }
    };

  })
  .directive('colorForm', function() {

    return {
      restrict: 'E',
      template: colorFormTpl,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        buttonText: '@',
        onSubmitColor: '&',
      },
      controller: function ColorFormController() { }
    };    

  })
  .directive('colorTool', function() {
    return {
      restrict: 'E',
      template: colorToolTpl,
      scope: {},
      controllerAs: 'vm',
      controller: function ColorToolController() {

        var vm = this;
    
        vm.colors = ['red','green', 'blue'];
        
        vm.colorForm = {
          color: '',
        };
    
        vm.addColor = function addColor(colorForm) {
          vm.colors.push(colorForm.color);
          vm.colorForm = {
            color: '',
          };
        };
    
        vm.deleteColor = function deleteColor(color) {
          console.log('called delete with color: ' + color);
          const colorIndex = vm.colors.findIndex(c => c === color);
          vm.colors.splice(colorIndex, 1);
        };
    
      },
    };
  });


angular.bootstrap(
  document.querySelector('#root'),
  ['ColorToolAppModule'],
);