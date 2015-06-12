'use strict';
angular.module('mytodoApp',[])
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
//Add to do task    
$scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
//Remove To Do Task
   $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
