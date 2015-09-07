angular.module('soundGlomerate.resultsFactory', ['soundGlomerate.searchFactory'])
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

.factory('Results', ['$http', 'Search', function($http, Search){   

  return {
    resultsData: Search.searchData
  }
}]);



// {3001: "Alternative", 3002: "BluesJazz", 3003: "Classical", 3004: "Country", 3005: "Cultural", 3006: "EDMElectronic", 3007: "Folk", 3008: "HipHopRap", 3009: "Indie", 3010: "Latin", 3011: "Metal", 3012: "Opera", 3013: "Pop", 3014: "RB", 3015: "Reggae", 3016: "ReligiousSpiritual", 3017: "Rock", 3018: "Top40", 3999: "Other"}


// var apiGenreId = {
//   'Alternative': "3001", 'BluesJazz': "3002", 'Classical': "3003", 'Country': "3004", 'Cultural': "3005", 'EDMElectronic': "3006", 'Folk': "3007", 'HipHopRap': "3008", 'Indie': "3009", 'Latin': "3010", 'Metal': "3011", 'Opera': "3012", 'Other': "3999", 'Pop': "3013", 'RB': "3014", 'Reggae': "3015",'ReligiousSpiritual': "3016", 'Rock': "3017", 'Top40': "3018"
// } 
