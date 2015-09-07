'use strict';
// this is where routing happens
angular.module('soundGlomerate', [ // declare all controllers and services
  'soundGlomerate.main',
  'soundGlomerate.mainFactory',
  'soundGlomerate.filter',
  'soundGlomerate.filterFactory',
  'soundGlomerate.map',
  'soundGlomerate.mapFactory',
  'soundGlomerate.results',
  'soundGlomerate.resultsFactory',
  'soundGlomerate.search',
  'soundGlomerate.searchFactory',
  'soundGlomerate.selectedEvent',
  'soundGlomerate.selectedEventFactory',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) { // this uses UI router (previously we used ng-router). this is better becuer it uses states, templates and controller and service and if there is a view within the state. THe later is done with the resolve method.
	$stateProvider
    .state('app', { // Not sure of all the things this is doing, but most importantly it is instantiating the main ui-view (ie the root node)
      url: '', // this will never diplay alone, so the url is an empty string
      template: '<ui-view/>' // this is where the root node is declared
    })
    .state('app.landing', { // this is a made up name so that humans understand what is happening. it follows the following format: rootNodeName.templateName.urlName. Here we only have the first two things, the rootNode and the template. This is a template that will be used for at least the main search page and the logIn page. 
      templateUrl: '/app/templates/landingPage.html', // this is where the template is defined
      url:'' // this will never diplay alone, so the url is an empty string
    })
    .state('app.landing.search', { // this is the main/landing page which is also the main search page
      url: '/', // the main page is found at the main url 
      views: {
        'main': {templateUrl: 'app/main/main.html'}, // the ui-view="main" in the div tag in the landing page template will display the html code in the main.html file
        'search': {templateUrl: 'app/search/search.html'} // the ui-view="search" in the div tag in the landingPage template will display the html code in the search.html file
      }
    })
    .state('app.landing.logIn', { //////// LOGIN DOESNT EXIST YET. THIS IS AN EXAMPLE
      url: '/logIn', // the main page is found at the logIn url 
      views: {
        'main': {templateUrl: 'app/main/main.html'}, // the ui-view="main" in the div tag in the landing page template will display the html code in the main.html file
        'search': {templateUrl: 'app/logIn/logIn.html'} // the ui-view="search" in the div tag in the landingPage template will display the html code in the logIn.html file
      } //////////////////////////////////////////////
    }) 
    .state('app.resultsDisplay', { // this is a made up name so that humans understand what is happening. it follows the following format: rootNodeName.templateName.urlName. Here we only have the first two things, the rootNode and the template. This is a template that will be used for at least the results page and the selected events page. it may be used for the user profile/dashboard page 
        templateUrl: '/app/templates/resultsDisplay.html', // this is where the template is defined
        url:'' // this will never diplay alone, so the url is an empty string
    })
    .state('app.resultsDisplay.results', { // this is results page
      url: '/results', // the results page is found at /results
      views: {
        'search': {templateUrl: 'app/search/search.html'}, // the ui-view="search" in the div tag in the resultsDiplay template will display the html code in the search.html file
        'results': {templateUrl: 'app/results/results.html'}, // the ui-view="results" in the div tag in the resultsDiplay template will display the html code in the results.html file
        'map': {templateUrl: 'app/map/map.html'}, // the ui-view="map" in the div tag in the resultsDiplay template will display the html code in the map.html file
        'filter': {templateUrl:'app/filter/filter.html'} // the ui-view="filter" in the div tag in the resultsDiplay template will display the html code in the filter.html file
      }
    })
    .state('app.resultsDisplay.selectedEvent', { // this is selectedEvent page
      url: '/selectedEvent', // the selectedEvent page is found at /selectedEvent CONSIDER CHANGING THIS TO SOMETHING SHORTER, LIKE '/details'
      views: {
        'search': {templateUrl: 'app/search/search.html'}, // the ui-view="search" in the div tag in the resultsDiplay template will display the html code in the search.html file
        'results': {templateUrl: 'app/selectedEvent/selectedEvent.html'}, // the ui-view="results" in the div tag in the resultsDiplay template will display the html code in the selectedEvent.html file
        'map': {templateUrl: 'app/map/map.html'}, // the ui-view="map" in the div tag in the resultsDiplay template will display the html code in the map.html file
      }
    })
    .state('app.resultsDisplay.dashboard', { //////// DASHBOARD DOESNT EXIST YET. THIS IS AN EXAMPLE. CONSIDER MAKING A NEW TEMPLATE FOR THIS PAGE.
      url: '/dashboard',
      views: {
        'search': {templateUrl: 'app/search/search.html'}, 
        'results': {templateUrl: 'app/userInfo/userInfo.html'}, 
        'map': {templateUrl: 'app/savedEvents/savedEvents.html'}, 
      } /////////////////////////////////////////////////
    })

    $urlRouterProvider.otherwise('/'); // this is the default route (if no route is specified)
})

.run(
    ['$rootScope', '$state', '$stateParams',
      function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
]);