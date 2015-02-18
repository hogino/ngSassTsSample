/// <reference path="../../../typings/tsd.d.ts" />

'use strict';

/**
 * @ngdoc function
 * @name ngYeomanSassTsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngYeomanSassTsApp
 */
// angular.module('ngYeomanSassTsApp')
//   .controller('AboutCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });

module main {
  export interface AboutScope extends ng.IScope {
    text: string;
  }

  export class AboutCtrl {

    constructor(private $scope:AboutScope) {
      $scope.text = "About sample content";
    }
  }
}

angular.module('app').controller("AboutCtrl",
  ($scope:main.AboutScope):main.AboutCtrl => {
    return new main.AboutCtrl($scope)
  });