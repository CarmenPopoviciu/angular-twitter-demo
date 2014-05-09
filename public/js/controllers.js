'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('AppCtrl', ['$scope', '$filter', 'socket', function ($scope, $filter, socket) {
        var unsortedTweets = [{
            text: 'YOLO',
            user: {
              profile_image_url: 'http://pbs.twimg.com/profile_images/449147152036397057/u0bWmFuc_normal.jpeg',
              name: 'Pascal Precht ʕ•̫͡•ʔ',
              screen_name: 'PascalPrecht'
            },
            lang: 'en',
            retweet_count: 0,
            clicked: false,
            created_at: new Date(1399680000000) // 10.05.2014
          },{
            text: 'Hello #codefrontio! We hope you enjoy the talk!',
            user: {
              profile_image_url: 'http://pbs.twimg.com/profile_images/449147152036397057/u0bWmFuc_normal.jpeg',
              name: 'Pascal Precht ʕ•̫͡•ʔ',
              screen_name: 'PascalPrecht'
            },
            lang: 'en',
            retweet_count: 0,
            clicked: false,
            created_at: new Date(1399507200000) // 08.05.2014
          },{
            text: 'FULL SPECTRUM TESTING ALL THE THINGS!',
            user: {
              profile_image_url: 'http://pbs.twimg.com/profile_images/449147152036397057/u0bWmFuc_normal.jpeg',
              name: 'Pascal Precht ʕ•̫͡•ʔ',
              screen_name: 'PascalPrecht'
            },
            lang: 'en',
            retweet_count: 0,
            clicked: false,
              created_at: new Date(1399593600000) // 09.05.2014
          }
        ];

        // latest tweet first ;)
        $scope.tweets = $filter('orderBy')(unsortedTweets, 'created_at', true);


        $scope.deleteTweet = function(index) {
            $scope.tweets.splice(index, 1);
        };

        socket.on('tweets', function (data) {
          console.log(data);
          $scope.tweets.splice(0, 0, data);
        });
    }]);
