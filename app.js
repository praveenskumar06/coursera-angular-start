(function() {
  'use strict';
  angular.module('NameCalculator', [])

  .controller('NameCalculatorController', function($scope) {
    $scope.name = "";
    $scope.count = 0;

    $scope.calculateName = function() {
      $scope.count = calculateNameValue($scope.name);
    }

    function calculateNameValue(name) {
      var totalNameValue = 0;
      for(var i=0; i<name.length;i++){
        totalNameValue+= name.charCodeAt(i);
      }
      return totalNameValue;
    }
  })
})();
