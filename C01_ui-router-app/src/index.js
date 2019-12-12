require('angular');
require('@uirouter/angularjs');

var myApp = angular.module('UIRouterDemoApp', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>Hello World!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>About!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});  
