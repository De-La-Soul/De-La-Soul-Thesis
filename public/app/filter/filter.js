angular.module('soundGlomerate.filter', [])

.controller('FilterController', function ($scope, Filter) {
  $scope.genresEB = Filter.genresEB;
  $scope.Answers = {};
});