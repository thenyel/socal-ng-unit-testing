'use strict';

angular.module('testingApp')
  .directive('myCollection', function () {
    return {
      template: '<div>' +
          '<div class="collection_item" ng-repeat="item in items.value">' +
            '<input type="text" ng-model="item"/>' +
            '<a class="collection_remove" ng-click="items.remove($index);">Remove</a>' +
          '</div>' +
          '<button class="collection_add" ng-click="items.add();">Add</button>' +
        '</div>',
      restrict: 'E',
      scope: {items: "="},
      link: function postLink(scope, element, attrs) {
      }
    };
  });
