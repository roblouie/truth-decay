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
              if (imageElement.size() == 0) {
                  $(element).append('<img class="main-image" style="display:none" src="' + newVal + '"/>');
                  setTimeout(function() {
                      $(element).css('background-image', 'url(../images/ring-alt.gif)');
                  }, 200);
                  $('.main-image').load(function() {
                    $(this).fadeIn(200, function() {
                        $(element).css('background-image', 'none');
                    });
                  });
                  return;
              }

              //imageElement.fadeOut(800, function() {
              //    $(this).remove();
              //    $(element).append('<img class="main-image" style="display:none" src="' + newVal + '"/>');
              //    $('.main-image').fadeIn();
              //});

              imageElement.fadeOut(200, function(){
                  setTimeout(function() {
                    $(element).css('background-image', 'url(../images/ring-alt.gif)');
                  }, 300);
                  $(this).attr('src', newVal).bind('onreadystatechange load', function(){
                      if (this.complete) {
                          $(this).fadeIn(200, function() {
                              setTimeout(function() {
                                  $(element).css('background-image', 'none');
                              }, 100);
                          });

                      }
                  });
              });

          });
      }
    };
  });
