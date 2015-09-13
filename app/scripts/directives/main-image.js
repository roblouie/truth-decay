'use strict';

/**
 * @ngdoc directive
 * @name truthDecayApp.directive:mainImage
 * @description
 * # mainImage
 */
angular.module('truthDecayApp')
    .directive('mainImage', function () {
        return {
            restrict: 'A',
            scope: {
                ngSrc: '='
            },
            link: function postLink(scope, element) {

                scope.$watch('ngSrc', function(newVal) {
                    var imageElement = $('.main-image');

                    if (imageExists(imageElement)) {
                        fadeOutExistingAndLoadNewImage(imageElement, newVal);
                    } else {
                        addImageToDOM(newVal);
                    }
                });

                function imageExists(imageElement) {
                    return imageElement.size() > 0;
                }

                function addImageToDOM(imageUrl) {
                    $(element).append('<img class="main-image" style="display:none" src="' + imageUrl + '"/>');
                    setTimeout(addLoadingSpinner, 300);
                    $('.main-image').load(function() {
                        $(this).fadeIn(200, removeLoadingSpinner);
                    });
                }

                function fadeOutExistingAndLoadNewImage(imageElement, imageUrl) {
                    imageElement.fadeOut(200, function(){
                        setTimeout(addLoadingSpinner, 300);
                        $(this).attr('src', imageUrl).bind('onreadystatechange load', function() {
                            if (this.complete) {
                                $(this).fadeIn(200, function() {
                                    setTimeout(removeLoadingSpinner, 400);
                                });
                            }
                        });
                    });
                }

                function addLoadingSpinner() {
                    $(element).css('background-image', 'url(../images/ring-alt.gif)');
                }

                function removeLoadingSpinner() {
                    $(element).css('background-image', 'none');
                }
            }
        };
    });
