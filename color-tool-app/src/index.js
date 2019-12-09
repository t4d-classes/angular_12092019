require('angular');

// class P { }
// typeof P => function

angular.module('ColorToolApp', [])
  .directive('toolHeader', function() {

    return {
      restrict: 'E', // selector: 'tool-header',
      // templateUrl: '/tool-header.html', // templateUrl
      template: `
        <header>
          <h1>{{vm.headerText}}</h1>
        </header>
      `,
      // Modern Angular is the Component Class
      controllerAs: 'vm', // sets the vm in the template
      bindToController: true,
      scope: {
        headerText: '@',
      },
      controller: function($scope) {
        // const vm = this;
        // bindToController allows me to skip this
        // assignment step
        // vm.headerText = $scope.headerText;
      },
    };

  })
  // Angular Component
  .directive('colorTool', function() {
    return {
      restrict: 'E',
      // templateUrl: '/color-tool.html',
      template: `
        <tool-header header-text="Color Tool!!"></tool-header>

        <ul>
          <li ng-repeat="color in vm.colors">{{color}}</li>
        </ul>

        <form novalidate>

          <div>
            <label for="color-input">Color:</label>
            <input type="text" id="color-input" name="color"
              ng-model="vm.colorForm.color" />
          </div>

          <button type="button" ng-click="vm.addColor()">Add Color</button>

        </form>            
      `,
      controllerAs: 'vm',
      scope: {},
      controller: function() {

        const vm = this;

        vm.headerText = 'Color Tool';

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

      },
    };
  });
