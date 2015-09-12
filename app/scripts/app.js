'use strict';

/**
 * @ngdoc overview
 * @name truthDecayApp
 * @description
 * # truthDecayApp
 *
 * Main module of the application.
 */
angular
  .module('truthDecayApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
