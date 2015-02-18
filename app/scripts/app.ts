/// <reference path="../../typings/tsd.d.ts" />

'use strict';

/**
 * @ngdoc overview
 * @name ngYeomanSassTsApp
 * @description
 * # ngYeomanSassTsApp
 *
 * Main module of the application.
 */

angular.module('app.controller', []);
angular.module('app.directives', []);
angular.module('app.filters', []);
angular.module('app.services', []);

angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])

angular.module('app')
  .config(['$routeProvider', function routes($routeProvider:ng.route.IRouteProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
  ]);
