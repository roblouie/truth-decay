'use strict';

/**
 * @ngdoc directive
 * @name truthDecayApp.directive:thumbnail
 * @description
 * # thumbnail
 */
angular.module('truthDecayApp')
  .directive('thumbnail', function () {
    return {
      restrict: 'A',
        scope: false,
        transclude: true,
      link: function postLink(scope, element, attrs, galleryCtrl) {

      }
    };
  });
