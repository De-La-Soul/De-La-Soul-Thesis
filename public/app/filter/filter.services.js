angular.module('soundGlomerate.filterFactory', [])

.factory('Filter',function($http){

	var genresEB = {
  'Alternative': "false", 'BluesJazz': "false", 'Classical': "false", 'Country': "false", 'Cultural': "false", 'EDMElectronic': "false", 'Folk': "false", 'HipHopRap': "false", 'Indie': "false", 'Latin': "false", 'Metal': "false", 'Opera': "false", 'Other': "false", 'Pop': "false", 'RB': "false", 'Reggae': "false",'ReligiousSpiritual': "false", 'Rock': "false", 'Top40': "false"};
  
  return {
    genresEB:genresEB;
  }
})