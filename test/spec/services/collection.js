'use strict';

describe('Service: Collection', function () {

  // load the service's module
  beforeEach(module('testingApp'));

  // instantiate service
  var Collection, Person, 
      persons;
  beforeEach(inject(function ($injector) {
    Collection = $injector.get("Collection");

    Person = function Person (data) {
      this.id = data.id || 0;
      this.name = data.name || "";
      this.validate = function () {}
    }

    persons = new Collection(Person);

    // Setup sample data
    persons.add({id: 1, name: "Danniel"});
    persons.add({id: 2, name: "John"});
    persons.add({id: 3, name: "Jane"});
    persons.add({id: 4, name: "Alex"});

  }));

  it('should do something', function () {
    expect(!!Collection).toBe(true);
  });

  describe("init", function() {
    it("should set Collection.model = `Constructor`", function() {
      expect(persons.model).toEqual(Person);
    });

    it("should set Collection.value = []", function() {
      expect(persons.value instanceof Array).toEqual(true)
    });
  });

  describe("add", function() {
    it("should add new `model instance` to value[]", function() {
      persons.add({id: 5, name: "Jason"});

      expect(persons.value.length).toEqual(5);
      expect(persons.value[4].name).toEqual("Jason");
      expect(persons.value[0] instanceof Person).toBeTruthy();
    });
  });

  describe("remove", function() {
    it("should remove the item of the specified index", function() {
      expect(persons.value.length).toEqual(4);

      // Remove Third element
      persons.remove(2);
      expect(persons.value.length).toEqual(3);

      // New third element should be alex
      expect(persons.value[2].name).toEqual("Alex");
    });
  });

  describe("validate", function() {
    it("should call validate for all models in value[]", function() {
      // Setup spies
      persons.value.forEach(function (person) {
        spyOn(person, "validate");
      })

      persons.validate();

      persons.value.forEach(function (person) {
        expect(person.validate).toHaveBeenCalled();
      })
    });
  });



});
