/* jshint node: true */
'use strict';

var repl = require('repl');
var _ = require('underscore');
var hs = require('hs-oauth-node');

var hsconn;

// Wrapper function for getHS
function get (command) {

	var result = {};

	hsconn.getHS(command, function(error, response) {
		if (error) console.log('Something went wrong', error);
		_.extend(result, response);
		console.log('\n', response, '\n');
	});

	return result;
}

var config = {
	username: process.env.HS_EMAIL,
	password: process.env.HS_PASS,
	hsID: process.env.HS_CONSUMER_KEY,
	hsSecret: process.env.HS_CONSUMER_SECRET
};

// Main
hs.connectHS(config, function(error, conn) {

	if (error) {
		console.log('Something went wrong', error);
		return;
	}

	hsconn = conn;

	var hsrepl = repl.start({
		prompt: 'HS> ',
		ignoreUndefined: true
	});

	hsrepl.context.get = get;

});
