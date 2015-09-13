angular.module('soundGlomerate.search', ['soundGlomerate.searchFactory'])
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




.controller('SearchController', ['$scope', '$state', 'Search', function ($scope, $state, Search) {

  $scope.startSearch = function(search){ // makes user input into an object
    // Eventbrite API call
    Search.eventBriteCall(search.location, search.startDate, search.endDate);
    $state.go('app.resultsDisplay.results');

    // Facebook API call
    Search.faceBookCall(search.location, search.startDate, search.endDate);
  }

  
}]);