var liveServer = require("live-server");
liveServer.start({
	port: 88, 
	browser: "Chrome", 
	verbose: true, 
	wait: 1000, 
	logLevel: 2
});