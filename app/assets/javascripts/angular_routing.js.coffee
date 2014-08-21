angular_client = angular.module('angular_client', ['ngRoute'])

angular_client.config [
  "$routeProvider"
  ($routeProvider) ->
    $routeProvider.when('/event_types',{
        templateUrl: "../assets/sports.html",
        controller: "betfairRootCtrl"
    }).when('/event_types/:sportName',{
        templateUrl: "../assets/sport.html",
        controller: "sportCtrl"
    }).otherwise({
        templateUrl: '../assets/main.html',
        controller: "sportsCtrl"
      })
]