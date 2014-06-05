'use strict';

angular.module('testingApp')
  .factory('Collection', function () {

    /**
     * new Collection(Person)
     *   = {value: [new Person(), new Person(), new Person()]}
     */

    function Collection (model) {
      this.model = model;
      this.value = [];
    }

    Collection.prototype.add = function(val) {
      this.value.push(new this.model(val));
    };

    Collection.prototype.remove = function(index) {
      if (this.value.length >= index + 1) {
        this.value.splice(index, 1);
      }
    };

    Collection.prototype.validate = function() {
      this.value.forEach(function (val) {
        if (typeof val.validate === "function") {
          val.validate();
        }
      })
      
    };

    return Collection;

  });
