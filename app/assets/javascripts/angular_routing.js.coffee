angular_client = angular.module('angular_client', ['ngRoute'])

angular_client.config [
  "$routeProvider"
  ($routeProvider) ->
    $routeProvider.when('/sports',{
        templateUrl: "../assets/sports.html",
        controller: "betfairRootCtrl"
    }).when('/sports/:sportName',{
        templateUrl: "../assets/sport.html",
        controller: "sportCtrl"
    }).otherwise({
        templateUrl: '../assets/main.html',
        controller: "sportsCtrl"
      })
]