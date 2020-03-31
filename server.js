'use strict';

const app = require('./app');
const path = require('path');
const portConfig = require('./config/api_config');

const PORT = portConfig.app.port;

let ENV;

if (app.get('env') === 'development') {
	ENV = 0;
	console.log(__dirname);
} else {
	ENV = 1;
	// Anything that doesn't match the above, send back index.html
	app.get('/', (req, res) => {
	 res.sendFile(path.join(__dirname + '/Client/build', 'index.html'));
	})
}
app.listen(PORT, (err) => {
	if (err) {
		if (ENV == 0) {
			console.log('LiliusMed Error: ' + err);
		}
		return server.status(0);
	} else {
		console.log('LiliusMed listening on PORT: ' + PORT);
	}
});