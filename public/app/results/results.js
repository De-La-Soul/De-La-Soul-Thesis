'use strict'
angular.module('soundGlomerate.results', ['soundGlomerate.resultsFactory'])
// goals:
// 2. Search Bar
// - view --
// -- 3 input forms
// -- search button
// -- queried location ($scope.location)
// - controller --
// -- $scope elements for each input 
// ---- $scope.location
// ---- $scope.startDate
// ---- $scope.endDate
// ---- $scope.clickFxn (calls the service Fxn)
// - services --
// ---- HTTP GET
// ------- eventbrite API info (send)
// ------- On success, store and parse data 
// (function(){

.controller('ResultsController', ['$scope', 'Results', function ($scope, Results) {
  


  $scope.apiData = Results.resultsData;

    
  }]);

