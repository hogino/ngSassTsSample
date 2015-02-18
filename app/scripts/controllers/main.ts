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
    content: string;
    items: string[];
    add(item:string): void;
  }
  export class MainCtrl {

    constructor(private $scope:MainScope) {
      $scope.items = [];
      $scope.add = function (item:string):void {
        $scope.items.push(item);
      }
    }
  }
}

angular.module('app').controller("MainCtrl",
  ($scope:main.MainScope):main.MainCtrl => {
    return new main.MainCtrl($scope)
  });