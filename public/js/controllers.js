'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('AppCtrl', function ($scope, socket) {
        $scope.tweets = [
          {
            text: 'Hello #codefrontio! We hope you enjoy the talk!',
            user: {
              image: 'http://pbs.twimg.com/profile_images/449147152036397057/u0bWmFuc_normal.jpeg',
              name: 'Pascal Precht ʕ•̫͡•ʔ'
            }
          },
          {
            text: 'FULL SPECTRUM TESTING ALL THE THINGS!',
            user: {
              image: 'http://pbs.twimg.com/profile_images/449147152036397057/u0bWmFuc_normal.jpeg',
              name: 'Pascal Precht ʕ•̫͡•ʔ'
            }
          },
          {
            text: 'YOLO',
            user: {
              image: 'http://pbs.twimg.com/profile_images/449147152036397057/u0bWmFuc_normal.jpeg',
              name: 'Pascal Precht ʕ•̫͡•ʔ'
            }
          }
        ];

        socket.on('tweets', function (data) {
          $scope.tweets.push(data);
        });
    });
