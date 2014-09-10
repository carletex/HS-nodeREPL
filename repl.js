var repl = require('repl');
var RSVP = require('rsvp')
var _ = require('underscore')
var hs = require('hs-oauth-node');

// Wrapper function for getHS
function get (command) {

	var result = {};

	hs.getHS(command, function(error, response) {
		if (error) console.log('Something went wrong', error);
		delete result.info;
		_.extend(result, response);
		console.log('\n', response, '\n');
	});

	return result;
}

// Main
hs.connectHS(function(error) {

	if (error) {
		console.log('Something went wrong', error);
		return;
	}

	var hsrepl = repl.start({
		prompt: "HS> ",
		ignoreUndefined: true
	});

	hsrepl.context.get = get;

});
