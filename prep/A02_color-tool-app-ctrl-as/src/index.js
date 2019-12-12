require('angular');

angular
  .module('ColorToolAppModule', [])
  .controller('ColorToolController', function() {

    var vm = this;

    vm.headerText = 'Color Tool';
    vm.colors = ['red','green', 'blue'];
    
    vm.colorForm = {
      color: '',
    };

    vm.addColor = function() {
      vm.colors.push(vm.colorForm.color);
    };

    vm.deleteColor = function (color) {
      const colorIndex = vm.colors.findIndex(c => c === color);
      vm.colors.splice(colorIndex, 1);
    };

  });


angular.bootstrap(
  document.querySelector('#root'),
  ['ColorToolAppModule'],
);