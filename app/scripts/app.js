'use strict';

/**
 * @ngdoc overview
 * @name hyraxApp
 * @description
 * # hyraxApp
 *
 * Main module of the application.
 */
var app = angular
  .module('hyraxApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app
  .controller('hyraxCtrl', [
    '$scope',
    '$mdSidenav',
    function($scope, $mdSidenav){
      $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
      };
    }
  ]);
