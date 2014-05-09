'use strict';

describe('Controller: AppCtrl', function() {
    var ctrl;
    var scope;
    var mockIoSocket;
    var socket;
    var spy;

    // load the controller's module
    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller, socketFactory) {
        scope = $rootScope.$new();
        mockIoSocket = io.connect(); // the socket.io mock provided in angular-socket-io
        socket = socketFactory({
            ioSocket: mockIoSocket,
            scope: scope
        });
        spy = jasmine.createSpy('tweetsSpy');

        ctrl = $controller('AppCtrl', {
            '$scope': scope,
            'socket': socket
        });
    }));

    it('should attach a tweets attribute on the scope', function() {
        expect(scope.tweets).toBeDefined();
    });

    /*it('should push a new tweet to the tweets array', inject(function($rootScope) {
        spyOn(mockIoSocket, 'emit').andCallThrough();
        //socket.on('tweets', spy);
        // before the socket emits the 'tweets' event
        expect(scope.tweets.length).toEqual(1);

        //mockIoSocket.emit('tweets', {text: "Hello world"});
        //expect(spy).not.toHaveBeenCalled();
        expect(scope.tweets.length).toEqual(2);
    }));*/
});
