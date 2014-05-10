'use strict';

describe('Controller: AppCtrl', function() {
    var ctrl;
    var scope;
    var mockIoSocket;
    var socket;

    // load the controller's module
    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller, socketFactory) {
        scope = $rootScope.$new();
        mockIoSocket = io.connect(); // the socket.io mock provided in angular-socket-io
        socket = socketFactory({
            ioSocket: mockIoSocket,
            scope: scope
        });

        ctrl = $controller('AppCtrl', {
            '$scope': scope,
            'socket': socket
        });
    }));

    it('should attach a tweets attribute on the scope', function() {
        expect(scope.tweets).toBeDefined();
    });

    it('should attach a deleteTweet method on the scope', function() {
        expect(scope.deleteTweet).toBeDefined();
    });

    it('should delete a tweet', function() {
        expect(scope.tweets.length).toEqual(3);
        scope.deleteTweet(1);
        expect(scope.tweets.length).toEqual(2);
    });

    it('should descendingly sort the tweets by date', function() {
        expect(scope.tweets[1].text).toContain('FULL SPECTRUM');
        expect(scope.tweets[2].text).toContain('Hello');
    });
});
