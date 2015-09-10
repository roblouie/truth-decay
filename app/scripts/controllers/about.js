'use strict';

/**
 * @ngdoc function
 * @name truthDecayApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the truthDecayApp
 */
angular.module('truthDecayApp')
  .controller('AboutCtrl', function (imageService) {
        this.thumbnailLinks = imageService.getThumbnailLinks();
  });
