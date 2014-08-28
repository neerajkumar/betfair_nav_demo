angular_client = angular.module('angular_client', ['ngResource', 'ngRoute', 'ui.router.state', 'ncy-angular-breadcrumb'])

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
    }).when("/events/:eventId",{
        templateUrl: "../assets/event.html",
        controller: "eventCtrl"
    }).otherwise({
        templateUrl: '../assets/main.html',
        controller: "sportsCtrl"
      })
]

#angular_client.config ($stateProvider, $urlRouterProvider) ->
#  $stateProvider.state('sports', {
#    url: '/event_types'
#    templateUrl: "../assets/sports.html",
#    controller: "betfairRootCtrl",
#    data: {
#      ncyBreadcrumbLabel: 'Sport'
#    }
#  }).state('sports.event_types', {
#    url: '/event_types/:sportName'
#    templateUrl: "../assets/sport.html",
#    controller: "sportCtrl",
#    data: {
#      ncyBreadcrumbLabel: 'Sprot'
#    }
#  }).state('/', {
#    url: "/",
#    templateUrl: '../assets/main.html',
#    controller: "sportsCtrl"
#    data: {
#      ncyBreadcrumbLabel: 'Sports'
#    }
#  })
#  $urlRouterProvider.otherwise('/');