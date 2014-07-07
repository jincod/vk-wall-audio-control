var socket = io('http://localhost:38477');

socket.on('event', function(command) {
	chrome.tabs.query({ active: true, currentWindow: true, url: "*://vk.com/wall*" }, function(tabs) {
		if(tabs && tabs.length === 1) {
			chrome.tabs.executeScript(tabs[0].id, {code:'var command = \'' + command + '\';' }, function() {
				chrome.tabs.executeScript(tabs[0].id, {file:'content.js'});
			});
		}
	});
});