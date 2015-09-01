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

      var items = [];

      var totalMount = function() {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
          total += items[i].value;
        }
        return total;
      };

      var sponsorType = function() {
        var type = 'Juanito';
        return type;
      };

      var removeElement = function(id) {
        for (var i = 0; i < items.length; i++) {
          if (items[i].key === id) {
              delete items[i];
          }
        }
      };

      var addElement = function(id, price) {
        items.push({key: id, value: price});
      };

      $scope.newElement = function(id, price) {
        console.log(id, price);
        if ( price === 0 ) {
          removeElement(id);
        } else {
          addElement(id, price);
        }

  	    $scope.mount = totalMount();
        $scope.type = sponsorType();
      };

    }

  ]);
