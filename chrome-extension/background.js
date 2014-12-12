var socket = io('http://localhost:38477');

function execute(command) {
	chrome.tabs.executeScript({code:'var command = \'' + command + '\';' }, function() {
		chrome.tabs.executeScript({file:'content.js'});
	});
}

chrome.commands.onCommand.addListener(function(command) {
	execute(command);
});

socket.on('event', function(command) {
	execute(command);
});