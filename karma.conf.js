// Karma configuration

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'public/bower_components/angular/angular.js',
            'public/bower_components/angular-route/angular-route.js',
            'public/bower_components/angular-socket-io/socket.js',
            'public/bower_components/angular-socket-io/mock/socket-io.js',
            'public/bower_components/angular-mocks/angular-mocks.js',

            'public/js/app.js',
            'public/js/controllers.js',
            'public/js/directives.js',
            'public/js/filters.js',
            'public/js/services.js',
            'spec/unit/*.js'
        ],

        /*plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-firefox-launcher'
        ],*/

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome','Firefox', 'Opera'],


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false

        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
        //   '/': 'http://localhost:9000/'
        // },
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'
    });
};
