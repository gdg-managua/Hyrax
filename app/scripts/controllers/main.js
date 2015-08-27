'use strict';

/**
 * @ngdoc function
 * @name hyraxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hyraxApp
 */
angular.module('hyraxApp')
  .controller('MainCtrl', [
    '$scope',
    '$mdSidenav',
    '$http',
    function($scope, $mdSidenav, $http){

      $http.get('/data/elements.json')
      .success(function(data, status, headers, config) {
        $scope.posts = data;
        console.log(data);
      })
      .error(function(data, status, headers, config) {
        // log error
        console.log('Bug');
      });

      $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
      };
    }
  ]);
