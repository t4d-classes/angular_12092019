import toolHeaderTpl from './tool-header.html';

angular.module('CarToolApp')
  .component('toolHeader', {
    template: toolHeaderTpl,
    bindings: {
      headerText: '@',
    },
  });