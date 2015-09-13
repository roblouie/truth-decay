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
      link: function postLink(scope, element) {
        scope.determineRatioAndLoadImage = function() {
            scope.updatePhotoInfo(element.attr('src').replace('thumbnails', 'shots'));
        }
      }
    };
  });
