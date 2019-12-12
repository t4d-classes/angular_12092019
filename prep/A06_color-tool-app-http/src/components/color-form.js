require('angular');

import colorFormTpl from './color-form.html';

angular.module('ColorToolAppModule')
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
  });
