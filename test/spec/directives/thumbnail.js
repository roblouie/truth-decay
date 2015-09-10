'use strict';

describe('Directive: thumbnail', function () {

  // load the directive's module
  beforeEach(module('truthDecayApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<thumbnail></thumbnail>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the thumbnail directive');
  }));
});
