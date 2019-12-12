require('angular');
require('@uirouter/angularjs');

var myApp = angular.module('UIRouterDemoApp', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>Hello World!</h3>',
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: `
      <h3>About!</h3>
      <nav>
        <ul>
          <li><a ui-sref="about.team({ teamMemberCount: 3 })">Team</a></li>
          <li><a ui-sref="about.history({ yearsInBusiness: 10 })">History</a></li>
        </ul>
      </nav>
      <ui-view></ui-view>
    `,
  }

  var teamState = {
    name: 'about.team',
    // url: '/team',
    template: `
      <h3>Team!</h3>
      <div>
        Team Count: {{vm.teamMemberCount}}
      </div>
    `,
    params: {
      teamMemberCount: 0,
    },
    controllerAs: 'vm',
    controller: function($stateParams) {
      const vm = this;
      vm.teamMemberCount = $stateParams.teamMemberCount;
    },
  };

  var historyState = {
    name: 'about.history',
    // url: '/history',
    template: `
      <h3>History!</h3>
      <div>
        Years in Business: {{vm.yearsInBusiness}}
      </div>      
    `,
    params: {
      yearsInBusiness: 0,
    },
    controllerAs: 'vm',
    controller: function($stateParams) {
      const vm = this;
      vm.yearsInBusiness = $stateParams.yearsInBusiness;
    },
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(teamState);
  $stateProvider.state(historyState);

});  
