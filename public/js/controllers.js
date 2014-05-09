'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('AppCtrl', function ($scope, socket) {
        $scope.tweets = [

          {
            text: 'Hello #codefrontio! We hope you enjoy the talk!',
            user: {
              profile_image_url: 'http://pbs.twimg.com/profile_images/449147152036397057/u0bWmFuc_normal.jpeg',
              name: 'Pascal Precht ʕ•̫͡•ʔ',
              screen_name: 'PascalPrecht'
            },
            lang: 'en',
            retweet_count: 0,
            clicked: false
          },
          {
            text: 'FULL SPECTRUM TESTING ALL THE THINGS!',
            user: {
              profile_image_url: 'http://pbs.twimg.com/profile_images/449147152036397057/u0bWmFuc_normal.jpeg',
              name: 'Pascal Precht ʕ•̫͡•ʔ',
              screen_name: 'PascalPrecht'
            },
            lang: 'en',
            retweet_count: 0,
            clicked: false
          },
          {
            text: 'YOLO',
            user: {
              profile_image_url: 'http://pbs.twimg.com/profile_images/449147152036397057/u0bWmFuc_normal.jpeg',
              name: 'Pascal Precht ʕ•̫͡•ʔ',
              screen_name: 'PascalPrecht'
            },
            lang: 'en',
            retweet_count: 0,
            clicked: false
          }
        ];

        socket.on('tweets', function (data) {
          console.log(data);
          $scope.tweets.push(data);
        });
    });
