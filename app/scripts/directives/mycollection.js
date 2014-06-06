'use strict';

angular.module('testingApp')
  .directive('myCollection', function ($http) {
    return {
      template: 
        '<div>' +
          '<div ng-repeat="item in list">' +
            '<input type="text" ng-model="item.name" />' +
            '<a class="remove"  ng-click="remove($index)">Remove</a>' +
          '</div>' +
          '<a ng-click="add()">Add</a>' +
        '</div>',
      restrict: 'E',
      scope: {list: "=", url: "@"},
      link: function postLink(scope, element, attrs) {

        scope.add = function () {
          scope.list.push({name: ""});
        }

        scope.remove = function (index) {
          scope.list.splice(index, 1);
        }

        if (scope.url) {
          $http({
            method: "GET",
            url: scope.url
          }).success(function (data) {
            scope.list = data;
          });
        }

      }
    };
  });
