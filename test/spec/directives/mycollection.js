'use strict';

describe('Directive: myCollection', function () {

  // load the directive's module
  beforeEach(module('testingApp'));

  var element,
    $rootScope, $compile, $httpBackend,
    $scope, scope;

  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get("$rootScope");
    $compile = $injector.get("$compile");
    $httpBackend = $injector.get("$httpBackend");

    $scope = $rootScope.$new();
    $scope.persons = [
      {name: "John"},
      {name: "Jane"},
      {name: "Joe"}
    ]

    // invoke
    element = angular.element('<my-collection list="persons"></my-collection>');
    element = $compile(element)($scope);
    $scope.$apply();

    scope = element.isolateScope();
  }));


  describe("init", function() {
    var inputs;
    beforeEach(function() {
       inputs = element.find("input");
    });

    it("should render three inputs", function() {
      expect(inputs.length).toEqual(3);
    });
    
  });
  describe("add", function() {
    it("should create another input", function() {
      scope.add();
      scope.$apply();

      expect(element.find("input").length).toEqual(4);
    });
    
  });
  describe("remove", function() {
    it("should remove an input box", function() {
      element.find(".remove").eq(0).click();
      
      expect(element.find("input").length).toEqual(2);
    });
    
  });










  
});
