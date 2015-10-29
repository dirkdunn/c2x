#! /usr/bin/env node

var cssToXPath = require('css-to-xpath');

// Either recurse in terminal, or take an argv to translate.
if(process.argv[2]){
	argTranslate(process.argv[2]);
} else {
	recurse();
}

function argTranslate(cssSelector){
	try {
		var xpath = cssToXPath(cssSelector.trim());
		console.log("XPATH: ", xpath);
	} catch(e){
		console.log("\nInvalid css selector! try again!");
	}

};

function recurse(){
	start();
	process.stdin.on('data', function (text) {

		if(!/^\s*quit\s*$/.test(text)){
			argTranslate(text);
			console.log("\nInsert valid CSS selector: ");
		}
		
		if (text === 'quit\n') {
		  done();
		  return false;
		}
	});

	function start(){
		process.stdin.resume();
		process.stdin.setEncoding('utf8');
		console.log("Welcome to the C2X CLI tool for converting CSS to XPATH :)\n");
		console.log("Insert valid CSS selector below, or type 'quit' to stop:");
	};
}; 

function done() {
	console.log('\nBye n00b');
	process.exit();
}
