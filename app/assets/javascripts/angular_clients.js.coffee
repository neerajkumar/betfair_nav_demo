# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

#= require_self

angular_client = angular.module('angular_client', ['ngResource'])

@sportsCtrl = ($scope, $location) ->
  $scope.viewSports = ->
    $location.url('/sports')

@betfairRootCtrl = ($scope, $http, $location) ->
  $http.get("/api/betfair_roots.json").success (data) ->
    $scope.sports = data

  $scope.viewSport = (sportName) ->
    $location.url('/sport/'+sportName)


@sportCtrl = ($scope, $routeParams) ->
  $scope.sportName = $routeParams.sportName
  console.log($routeParams)