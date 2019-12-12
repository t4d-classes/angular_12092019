require('angular');

import toolHeaderTpl from './tool-header.html';

angular.module('ColorToolAppModule')
  .component('toolHeader', {
    template: toolHeaderTpl,
    bindings: {
      headerText: '@',
    },
  });
