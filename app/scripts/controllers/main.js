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
      .success(function(data, status) {
        $scope.elements = data;
        console.log(data, status);
      })
      .error(function(data, status) {
        console.log(data, status);
      });

      $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
      };

      $scope.addElement = function(element) {
        console.log(element);
  	    $scope.mount = totalMount(element);
        $scope.type = sponsorType();
      };

      var totalMount = function(element) {
        var total = [];
        total += element;
        return total;
      };

      var sponsorType = function() {
        var type = 'Juanito';
        return type;
      };

    }

  ]);
