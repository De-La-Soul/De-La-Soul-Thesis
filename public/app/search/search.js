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

angular.module('soundGlomerate.search', ['soundGlomerate.searchFactory'])


.controller('SearchController', ['$scope', 'Search', function ($scope, Search) { // naming the controller 'SearchController', requiring the 'Seach' factory and the $scope module. 

  $scope.update = function(search){ // makes user input into an object
    if(search === undefined){
      alert("must enter a location");
    } else {
      $scope.search = search; 
    }
  }

  $scope.getEBEvents = function(){ // this function is called when the submit button is clicked
    Search.getEventBriteData($scope.search.location, $scope.search.startDate, $scope.search.endDate)
    .then(function(events){
        $scope.EBEvents = events;
    });
  };
  
}]);




















