'use strict';

describe('Factory: Collection', function () {

  // load the service's module
  beforeEach(module('testingApp'));

  // instantiate service
  var Collection, sample;
  var $httpBackend;
  beforeEach(inject(function ($injector) {
    Collection = $injector.get("Collection");
    $httpBackend = $injector.get("$httpBackend");

    sample = new Collection();
  }));

  it("should be a factory", function() {
    expect(typeof Collection).toEqual("function");
  });

  describe("init", function() {
    it("should have an empty Collection.value", function() {
      expect(sample.value).toEqual([])
    });

    it("should get value form AJAX request when url provided", function() {
      var urlData = ["test", "aaa", "bbb"];
      $httpBackend.expectGET("some_url/sample.json").respond(200, urlData);

      // Should call GET request
      sample = new Collection("some_url/sample.json");

      // !!! Flush GET request
      $httpBackend.flush();

      expect(sample.value).toEqual(urlData);
    });
  });

  describe("add", function() {
    it("should add to  Collection.value", function() {
      expect(sample.value).toEqual([]);
      sample.add("test");

      expect(sample.value[0]).toEqual("test");
    });
  });

  describe("remove", function() {
    it("should remove the item in the specified index", function() {
      sample.add(0);
      sample.add(1);
      sample.add(2);

      sample.remove(1);

      expect(sample.value).toEqual([0, 2]);
    });
  });

});
