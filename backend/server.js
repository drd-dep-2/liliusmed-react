'use strict';

const app = require('./app');
const path = require('path');

const portConfig = require('./config/api_config');

const PORT = portConfig.app.port;

let ENV;

if (app.get('env') === 'development') {
	ENV = 0;
} else {
	ENV = 1;
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '/Client/app/build', 'index.html'));
	});
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