'use strict';

/**
 * @ngdoc function
 * @name almqueriesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the almqueriesApp
 */
angular.module('almqueriesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todo = [
      'Item1',
      'Item2',
      'Item3'
    ];
  });
