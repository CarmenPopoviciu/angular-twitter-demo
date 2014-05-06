'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('AppCtrl', function ($scope, socket) {
        $scope.tweets = [];

        socket.on('tweets', function (data) {
          $scope.tweets.push(data);
        });
    });
