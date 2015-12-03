
angular.module('soundGlomerate.searchFactory', [])

.service('Search', ['$http',  function($http){ // naming the factory 'Search', requiring the $http module to make API calls

  var events = []; 
  var latLong =[];
  var selectedCity = '';
  var keys = {};
  

  $http.get('/keys', {})
  .success(function(val){
    keys.eventbrite = val.eventbrite;
  });

  var getEventBriteData = function(city, startDate, endDate){ 
  // Defines the getEventBriteData fxn

    angular.copy([], events); // Creates a copy of the search data
    selectedCity = city;
    
    var fixTime = function(date){
      date = date.substring(0,19);
      console.log('date', date);
      date += 'Z';
      return date;
    }  

    if(startDate !== undefined){
      startDate = fixTime(startDate.toISOString());
    }
    if(endDate !== undefined){
      endDate = fixTime(endDate.toISOString());
    }

    startDate = startDate ? '&start_date.range_start=' + startDate : '';

    endDate = endDate ? '&start_date.range_end=' + endDate : '';

    return $http({ // the direct API call withß the user specificed input as the fxn's parameters
      method: 'GET',
      url: 'https://www.eventbriteapi.com/v3/events/search/?sort_by=date&venue.city=' + city + '&venue.region=CA'+startDate+endDate+'&categories=103&expand=venue&token=' + keys.eventbrite
    })
    .then(function(res){ // this is a promise that waits for the API to return info
      console.log('on api request');
      res.data.events.forEach(function(evnt){
        ////////////////////////////////////////////////////////////////////////////////////   
        //  Gets the initial lat long and formats them to put as markers on the map       //
        ////////////////////////////////////////////////////////////////////////////////////   
        
        // Makes tuples of latitude, longitude
        var tuple = [ evnt.venue.address.latitude, evnt.venue.address.longitude];

        // Pushes tuples([lat, long]) in the LatLong array
        latLong.push(tuple);
        
        // console.log('Map tuple collection', tuple);
        ////////////////////////////////////////////////////////////////////////////////////   
        // Push each event into the events array for the results to access                //
        ////////////////////////////////////////////////////////////////////////////////////   
        events.unshift(evnt);
      });
      return events;
    })
    .catch(function(err){
      console.log(err);
    });
  };

  

  var scrappedData = function(){
    return $http.get('/db/events')
    .success(function (res) {
      // console.log('on scrappedData');
      res.forEach(function(event){
        events.unshift(event);
      });
    });
  };

  return {
    events: events,
    getEventBriteData: getEventBriteData,
    scrappedData: scrappedData,
    latLong: latLong,
    selectedCity: selectedCity
  };
}]);

  
