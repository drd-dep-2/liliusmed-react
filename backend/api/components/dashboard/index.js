'use strict';

'use strict';
// Server and Setup
const express = require('express');
const router = express.Router();
const path = require('path');

// Controller
const Hospital = require('./controller');


// Get Dashboard
router.get('/dashboard', (req, res) => {
	let cookie = req.cookies.sessionId;
	if (!cookie) {
		res.sendStatus(401);
	} else {
		Hospital.checkAndRender(cookie)
			.then(result => {
				if (result == 401) {
					res.sendStatus(401);
				} else {
					res.send(result);
				}
			})
			.catch(err => {
				console.log(err);
			});
	}
});

module.exports = router;