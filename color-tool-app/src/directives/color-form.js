require('angular');

import colorFormTpl from './color-form.html';

angular.module('ColorToolApp')
  .directive('colorForm', function() {

    return {
      restrict: 'E',
      template: colorFormTpl,
      scope: {
        // input
        buttonText: '@',
        // output
        onSubmitColor: '&',
      },
      bindToController: true,
      controllerAs: 'vm',
      controller: function ColorFormController() {

        const vm = this;

        vm.colorForm = {
          color: '',
        };

        vm.submitColor = function SubmitColor() {
          vm.onSubmitColor({ colorData: { ...vm.colorForm } });
          vm.colorForm = {
            color: '',
          };
        };
      },
    };

  });