var repl = require("repl");
var hs = require('hs-oauth-node');

hs.connectHS(function(error) {

	if (error) {
		console.log('Something went wrong', error);
		return;
	}

	var hsrepl = repl.start({
		prompt: "HS> "
	});

	hsrepl.context.hs = hs;

});