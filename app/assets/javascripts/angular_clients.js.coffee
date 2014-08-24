# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

#= require_self

angular_client = angular.module('angular_client', ['ngResource'])

@sportsCtrl = ($scope, $location) ->
  $scope.viewSports = ->
    $location.url('/event_types')

@betfairRootCtrl = ($scope, $http, $location) ->
  $http.get("/api/betfair_roots.json").success (data) ->
    $scope.sports = data

  $scope.viewSport = (sportName) ->
    $location.url('/sport/'+sportName)


@sportCtrl = ($scope, $http, $routeParams) ->
  $scope.sport = $routeParams.sportName

  $http.get("/api/betfair_roots/events.json?event="+$routeParams.sportName).success (data) ->
    $scope.events = data
  console.log($routeParams)

@eventCtrl = ($scope, $http, $routeParams) ->
  $scope.event = $routeParams.eventId

  $http.get("/api/betfair_roots/events.json?event="+$routeParams.eventId).success (data) ->
    $scope.events = data
  console.log($routeParams)