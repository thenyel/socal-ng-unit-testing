'use strict';

angular.module('testingApp')
  .controller('MainCtrl', function ($scope, Collection) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    function Person (data) {
      this.id = (data || {}).id || 0;
      this.name = (data || {}).name || "";
      this.validate = function () {}
    }

    $scope.persons = new Collection(Person);

    // Setup sample data
    $scope.persons.add({id: 1, name: "Danniel"});
    $scope.persons.add({id: 2, name: "John"});
    $scope.persons.add({id: 3, name: "Jane"});
    $scope.persons.add({id: 4, name: "Alex"});
  });
