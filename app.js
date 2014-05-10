
/**
 * Module dependencies
 */

var express = require('express'),
    routes = require('./routes'),
    api = require('./routes/api'),
    http = require('http'),
    path = require('path'),
    Twit = require('twit');

var app = module.exports = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

/**
 * Twitter-related
 */
// for testing purposes, use something even more common
var TAG = 'swirlingspectacleofcyclicrainbowsplendor';

var T = new Twit({
    consumer_key: '11mxKtJzxo8FNSl60wR6BB6L0',
    consumer_secret: 'jF9Y58YJHmwlGO8rQJ8EZeLQWxtAsIGEsv8QFRDB0mv4FGJplC',
    access_token: '934224026-ThcouRblpQkFDSV68guaQ3J577AlYqQ3NNdqIGzk',
    access_token_secret: 'AFhSpRkR1aZXFeg96EDQWKzUv4XyYx8IhkXL1UcSQRXOf'
});
var stream = T.stream('statuses/filter', { track: TAG});

stream.on('tweet', function (tweet) {
    var msg = {};
    console.log(tweet);
    
    tweet.clicked = false;
    io.sockets.emit('tweets', tweet);
});


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Socket.io Communication
io.sockets.on('connection', require('./routes/socket'));

/**
 * Start Server
 */

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
