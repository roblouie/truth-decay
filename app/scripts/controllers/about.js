'use strict';

/**
 * @ngdoc function
 * @name truthDecayApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the truthDecayApp
 */
angular.module('truthDecayApp')
  .controller('AboutCtrl', function (imageService, $scope) {
        var vm = this;
        vm.fullFrameThumbnails = imageService.getFullFrameThumbnails();
        vm.jockThumbnails = imageService.getJockThumbnails();
        vm.teethThumbnails = imageService.getTeethThumbnails();
        vm.photoInfo = { imagePath: imageService.getRandomImage() };

        $scope.updatePhotoInfo = function(imageName) {
            vm.photoInfo.imagePath = imageName;
        }
  });
