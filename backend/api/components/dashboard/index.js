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

router.get('/search', (req, res) => {

	let cookie = req.cookies.sessionId;
	if (!cookie) {
		res.sendStatus(401);
	} else {
		Hospital.getAllHospitalNames(cookie)
			.then(result => {
				if (result == 401) {
					res.sendStatus(401);
				} else {
					console.log(result);
					res.send(result);
				}
			})
			.catch(err => {
				console.log(err);
			});
	}
});

router.post('/search/select', (req, res) => {
	let cookie = req.cookies.sessionId;
	let email = req.body.email;
	if (!cookie) {
		res.sendStatus(401);
	} else {
		Hospital.getHospitalFromSearch(cookie, email)
			.then(result => {
				if (result == 401) {
					res.sendStatus(401);
				} else {
					console.log(result);
					res.send(result);
				}
			})
			.catch(err => {
				console.log(err);
			});
	}
})
module.exports = router;