# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

#= require_self

angular_client = angular.module('angular_client', ['ngResource'])

foo = []
data = []

@sportsCtrl = ($scope, $location) ->
  $scope.viewSports = ->
    $location.url('/event_types')

@betfairRootCtrl = ['$scope', 'items', '$location', ($scope, items, $location) ->
  foo = items.query()
  $scope.sports = foo
  $scope.viewSport = (sportName) ->
    $location.url('/sport/'+sportName)
]

extractData = (json, sportName) ->
  i = 0

  while i < json.length
    if json[i]["type"] == "MARKET"
      return
    if json[i]["name"] == sportName
      data = json[i]["children"]
      break
    else if json[i]["children"] is undefined
      return
    else
      extractData json[i]["children"], sportName
    i++
  return data if data.length > 0

@sportCtrl = ['$scope', 'items', '$routeParams', ($scope, items, $routeParams) ->
  $scope.sport = $routeParams.sportName
  if foo.length == 0
    foo = items.query()
    foo.$promise.then((result) ->
      $scope.events = extractData(result, $routeParams.sportName)
    )
  else
    $scope.events = extractData(foo, $routeParams.sportName)
]

@eventCtrl = ['$scope', 'items', '$routeParams', ($scope, items, $routeParams) ->
  $scope.event = $routeParams.eventName
  if foo.length == 0
    foo = items.query()
    foo.$promise.then((result) ->
      $scope.events = extractData(result, $routeParams.eventName)
    )
  else
    $scope.events = extractData(foo, $routeParams.eventName)
]