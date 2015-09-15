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




.controller('SearchController', ['$scope', '$state', 'Search', function ($scope, $state, Search) { // naming the controller 'SearchController', requiring the 'Seach' factory and the $scope module. 

  $scope.cities = {
    oakland: 'Oakland',
    berkeley: 'berkeley',
    sanFrancisco: "San Francisco"

  };
  $scope.update = function(search){ // makes user input into an object
    if(search === undefined){
      alert("must enter a location");
    } else {
      $scope.search = search; 

    }
  // $scope.results = Search.events;
  };

  $scope.getEBEvents = function(){ // this function is called when the submit button is clicked
    console.log('message from $scope.getEBEvents in the search controller');
    Search.getEventBriteData($scope.search.location, $scope.search.startDate, $scope.search.endDate)
    $state.go('app.resultsDisplay.results');
  };

}]);