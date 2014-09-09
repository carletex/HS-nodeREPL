var repl = require('repl');
var RSVP = require('rsvp')
var hs = require('hs-oauth-node');

// Wrapper function for getHS using promises
function get (command) {
	return new RSVP.Promise(function(resolve, reject) {

		hs.getHS(command, function(error, response) {
			if (error) reject(error)
			resolve(response);
		})

	});
}

// Main
hs.connectHS(function(error) {

	if (error) {
		console.log('Something went wrong', error);
		return;
	}

	var hsrepl = repl.start({
		prompt: "HS> "
	});

	hsrepl.context.get = get;

});
