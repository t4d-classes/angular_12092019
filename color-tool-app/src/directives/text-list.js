require('angular');

import textListTpl from './text-list.html';

angular.module('ColorToolApp')
  .directive('textList', function() {

    return {
      restrict: 'E',
      template: textListTpl,
      scope: {
        // name of the property on $scope or vm
        // items: '=items' // name of the attr
        items: '=',
      },
      bindToController: true,
      controllerAs: 'vm',
      controller: function() { },
    };

  });