'use strict';

describe('Directive: myCollection', function () {

  // load the directive's module
  beforeEach(module('testingApp'));

  var element, Collection, sample,
    $compile, $rootScope, $scope, scope;

  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get("$rootScope");
    $compile = $injector.get("$compile");
    Collection = $injector.get("Collection");

    $scope = $rootScope.$new();
    $scope.sample = new Collection();
    $scope.sample.add("test");
    $scope.sample.add("abc");
    $scope.sample.add("123");

    element = angular.element('<my-collection items="sample"></my-collection>');
    element = $compile(element)($scope);
    scope = element.isolateScope();
    $scope.$apply();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    var inputs = element.find("input");

    expect(inputs.length).toEqual(3)
    expect(inputs.eq(0).val()).toEqual("test");
    expect(inputs.eq(1).val()).toEqual("abc");
    expect(inputs.eq(2).val()).toEqual("123");
  }));

  it("should add an item on .collection_add `click`", function() {
    var addBtn = element.find('.collection_add');

    addBtn.click();
    expect(element.find("input").length).toEqual(4);
  });

  it("should remove an item on .collection_remove `click`", function() {
    var removeBtns = element.find('.collection_remove');

    removeBtns.eq(1).click();
    expect($scope.sample.value).toEqual(["test", "123"])
  });
});
