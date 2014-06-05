'use strict';

angular.module('testingApp')
  .factory('Collection', function ($http) {

    function Collection (url) {
      var self = this;

      this.value = [];

      if (typeof url === "string") {
        $http({
          method: "GET",
          url: url
        }).success(function (data) {
          if (data instanceof Array) {
            self.value = data;
          }
        })

      }
    }

    Collection.prototype.add = function(val) {
      this.value.push(val);

    };

    Collection.prototype.remove = function(arg) {
      if (typeof arg === "number") {
        this.value.splice(arg, 1);
      }
      
    };

    return Collection;

  });
