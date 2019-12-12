require('angular');

import itemListTpl from './item-list.html';

angular.module('ColorToolAppModule')
  .component('itemList', {
    template: itemListTpl,
    bindings: {
      items: '<',
      onDeleteItem: '&',
    },
  });
