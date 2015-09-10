'use strict';

/**
 * @ngdoc service
 * @name truthDecayApp.imageService
 * @description
 * # imageService
 * Service in the truthDecayApp.
 */
angular.module('truthDecayApp')
  .service('imageService', function () {
    return {
        getShotLinks: getShotLinks,
        getThumbnailLinks: getThumbnailLinks
    };

    function getShotLinks() {
        return getLinks();
    }

    function getThumbnailLinks() {
        return getLinks(true);
    }

    function getLinks(isThumbnails) {
        var urlList = [];
        for (var i = 1; i <= 25; i++) {
            urlList.push("/images/" + (isThumbnails ? "thumbnails/" : "shots/") + i + ".JPG");
        }
        return urlList;
    }
  });
