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
            getFullFrameThumbnails: getFullFrameThumbnails,
            getFullFrameShots: getFullFrameShots,
            getJockThumbnails: getJockThumbnails,
            getJockShots: getJockShots,
            getTeethThumbnails: getTeethThumbnails,
            getTeethShots: getTeethShots,
            getAllThumbnails: getAllThumbnails,
            getAllShots: getAllShots,
            getRandomImage: getRandomImage
        };

        function getFullFrameThumbnails()   { return getFullFrameLinks(true) }
        function getFullFrameShots()        { return getFullFrameLinks(false) }
        function getJockThumbnails()        { return getJockLinks(true) }
        function getJockShots()             { return getJockLinks(false) }
        function getTeethThumbnails()       { return getTeethLinks(true) }
        function getTeethShots()            { return getTeethLinks(false) }
        function getAllThumbnails()         { return getAllLinks(true) }
        function getAllShots()              { return getAllLinks(false) }

        function getFullFrameLinks(isThumbnails) {
            var urlList = [];
            for (var i = 22; i <=25; i++) {
                urlList.push("./images/" + (isThumbnails ? "thumbnails/" : "shots/") + i + ".JPG");
            }
            return urlList;
        }

        function getJockLinks(isThumbnails) {
            var urlList = [];
            for (var i = 1; i <= 7; i++) {
                urlList.push("./images/" + (isThumbnails ? "thumbnails/" : "shots/") + i + ".JPG");
            }
            urlList.push("./images/" + (isThumbnails ? "thumbnails/" : "shots/") + 15 + ".JPG");
            return urlList;
        }

        function getTeethLinks(isThumbnails) {
            var urlList = [];
            for (var i = 8; i <= 14; i++) {
                urlList.push("./images/" + (isThumbnails ? "thumbnails/" : "shots/") + i + ".JPG");
            }
            for (var i = 16; i <= 21; i++) {
                urlList.push("./images/" + (isThumbnails ? "thumbnails/" : "shots/") + i + ".JPG");
            }
            return urlList;
        }

        function getAllLinks(isThumbnails) {
            return getFullFrameLinks(isThumbnails).concat(getJockLinks(isThumbnails).concat(getTeethLinks(isThumbnails)));
        }

        function getRandomImage() {
            var imageNumberToShow = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
            return "./images/shots/" + imageNumberToShow + ".JPG";
        }
    });
