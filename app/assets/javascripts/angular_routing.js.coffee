angular_client = angular.module('angular_client', ['ngResource', 'ngRoute'])

angular_client.factory 'items', ['$resource', ($resource) ->
  data = $resource('/api/betfair_roots.json')
]

angular_client.config [
  "$routeProvider"
  ($routeProvider) ->
    $routeProvider.when('/event_types',{
        templateUrl: "../assets/sports.html",
        controller: "betfairRootCtrl"
    }).when('/event_types/:sportName',{
        templateUrl: "../assets/sport.html",
        controller: "sportCtrl"
    }).when('/events/:eventName',{
        templateUrl: "../assets/sport.html",
        controller: "eventCtrl"
    }).otherwise({
        templateUrl: '../assets/main.html',
        controller: "sportsCtrl"
      })
]