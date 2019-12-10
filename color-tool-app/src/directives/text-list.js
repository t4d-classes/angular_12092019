require('angular');

import textListTpl from './text-list.html';

angular.module('ColorToolApp')
  .component('textList', {
    template: textListTpl,
    bindings: {
      items: '<', 
    },
  });