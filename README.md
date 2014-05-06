angular-twitter-demo
====================

Very simple app which tracks and displays tweets based on a given keyword. Built with a SANE stack ;)
(Socket.io + AngularJS + Node + Express), the application is based on the Angular Socket.io Seed
(https://github.com/btford/angular-socket-io-seed) and uses Twit, a Twitter API Client for Node
(https://github.com/ttezel/twit)

### Running the app
First install the dependencies with npm:
	npm install

Then grab the bower dependencies:
	bower install

Finally, run the app:
	node app.js

and go to localhost:3000 in your browser

### The magic keyword
The application is set to track tweets which have used the 'swirlingspectacleofcyclicrainbowsplendor' keyword in
some way (don't ask, just check https://github.com/toddpress/Unicorn-js). If that's not interesting for you,
then the Express application file, app.js, is the place to change that.

