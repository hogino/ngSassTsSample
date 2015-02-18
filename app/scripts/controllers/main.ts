/// <reference path="../../../typings/tsd.d.ts" />

'use strict';

/**
 * @ngdoc function
 * @name ngYeomanSassTsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngYeomanSassTsApp
 */
// angular.module('app')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });
module main {
  export interface MainScope extends ng.IScope {
    todo: string;
    todos: string[];
    addTodo(): void;
    removeTodo(index:number): void;
  }
  export class MainCtrl {

    constructor(private $scope:MainScope) {
      $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
      $scope.addTodo = function ():void {
        $scope.todos.push($scope.todo);
        $scope.todo = ""
      };

      $scope.removeTodo = function (index:number):void {
      	$scope.todos.splice(index, 1);
      };
    }
  }
}

angular.module('app').controller("MainCtrl",
  ($scope:main.MainScope):main.MainCtrl => {
    return new main.MainCtrl($scope)
  });