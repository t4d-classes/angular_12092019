require('angular');
require('angular-route');

var myApp = angular.module('NGRouteDemoApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/hello', {
      template: '<h3>Hello World!</h3>',
    })
    .when('/about', {
      template: '<h3>About!</h3>',
    });

  $locationProvider.html5Mode(true);

});  
