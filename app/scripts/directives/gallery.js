'use strict';

/**
 * @ngdoc directive
 * @name truthDecayApp.directive:gallery
 * @description
 * # gallery
 */
angular.module('truthDecayApp')
  .directive('gallery', function () {
    return {
      templateUrl: '/views/templates/gallery.html',
      restrict: 'E',
        scope: {thumbnailLinks : '=', imageLinks: '=' },
        link: function(scope, element, attrs) {


        }
    };
  });
