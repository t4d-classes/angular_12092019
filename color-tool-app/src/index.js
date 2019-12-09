require('angular');

// class P { }
// typeof P => function

angular.module('ColorToolApp', [])
  .controller('ColorToolController',
    class ColorToolController {

      constructor() {

        const vm = this;

        vm.headerText = 'Color Tool!';
  
        vm.colors = [
          'red',
          'green',
          'blue',
        ];
  
        vm.colorForm = {
          color: '',
        };
  
        vm.addColor = function() {
          vm.colors.push(vm.colorForm.color);
          vm.colorForm.color = '';
        };

      }


    });

