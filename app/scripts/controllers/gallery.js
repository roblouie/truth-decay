'use strict';

angular.module('truthDecayApp')
  .controller('GalleryCtrl', function (imageService, $scope) {
        var vm = this;
        vm.fullFrameThumbnails = imageService.getFullFrameThumbnails();
        vm.jockThumbnails = imageService.getJockThumbnails();
        vm.teethThumbnails = imageService.getTeethThumbnails();
        vm.photoInfo = { imagePath: imageService.getRandomImage() };

        vm.tabletSize = function() {
            return $(window).width() < 960;
        };

        $scope.updatePhotoInfo = function(imageName) {
            vm.photoInfo.imagePath = imageName;
        }
  });
