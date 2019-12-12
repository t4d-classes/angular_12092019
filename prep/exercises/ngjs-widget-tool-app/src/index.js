require('angular');

import toolHeaderTpl from './templates/tool-header.html';
import widgetFormTpl from './templates/widget-form.html';

angular.module('WidgetToolApp', [])
  .directive('toolHeader', function() {

    return {
      restrict: 'E',
      template: toolHeaderTpl,
      scope: {
        headerText: '@',
      },
      bindToController: true,
      controllerAs: 'vm',
      controller: function() { },
    };

  })
  .component('widgetForm', {
    template: widgetFormTpl,
    bindings: {
      buttonText: '@',
      onSubmitWidget: '&',
    },
    controller: 'WidgetFormController',
  })
  .controller('WidgetToolController', ['$scope', function($scope) {

    $scope.headerText = 'Widget Tool';

    $scope.widgets = [
      { id: 1, name: 'Red Small Widget', description: 'A small, red widget.', color: 'red', size: 'small', quantity: 45 },
      { id: 2, name: 'Blue Large Widget', description: 'A large, blue widget.', color: 'blue', size: 'large', quantity: 10 },
    ];

    $scope.editWidgetId = -1;

    $scope.addWidget = function(widget) {

      widget.id = Math.max(...$scope.widgets.map(c => c.id), 0)  + 1;

      $scope.widgets.push(widget);
    };

    $scope.editWidget = function(widgetId) {

      var widgetIndex = $scope.widgets.findIndex(c => c.id === widgetId);

      $scope.editWidgetForm = {
        name: $scope.widgets[widgetIndex].name,
        description: $scope.widgets[widgetIndex].description,
        color: $scope.widgets[widgetIndex].color,
        size: $scope.widgets[widgetIndex].size,
        quantity: $scope.widgets[widgetIndex].quantity,
      };

      $scope.editWidgetId = widgetId;
    };

    $scope.deleteWidget = function(widgetId) {
      
      var widgetIndex = $scope.widgets.findIndex(c => c.id === widgetId);
      $scope.widgets.splice(widgetIndex, 1);

      $scope.editWidgetId = -1;
    };

    $scope.saveWidget = function(widgetId) {

      var widgetIndex = $scope.widgets.findIndex(c => c.id === widgetId);

      $scope.widgets[widgetIndex].name = $scope.editWidgetForm.name;
      $scope.widgets[widgetIndex].description = $scope.editWidgetForm.description;
      $scope.widgets[widgetIndex].color = $scope.editWidgetForm.color;
      $scope.widgets[widgetIndex].size = $scope.editWidgetForm.size;
      $scope.widgets[widgetIndex].quantity = $scope.editWidgetForm.quantity;

      $scope.editWidgetId = -1;

    };

    $scope.cancelWidget = function(widgetId) {
      $scope.editWidgetId = -1;
    };

  }])
  .controller('WidgetFormController', function() {

    const $ctrl = this;

    $ctrl.widgetForm = {
      name: '',
      description: '',
      color: 1900,
      size: '',
      quantity: 0,
    };

    $ctrl.submitWidget = function() {

      $ctrl.onSubmitWidget({ widget: { ...$ctrl.widgetForm } });

      $ctrl.widgetForm = {
        name: '',
        description: '',
        color: 1900,
        size: '',
        quantity: 0,
      };

    };

  });
