'use strict';

const express = require('express');
const router = express.Router();
const Session = require('./controller');

router.use(require('cookie-parser')());

router.post('/verifySession', (req, res) => {
	let cookie = req.cookies.sessionId;
	
	console.log(cookie);
	if (!cookie) {
		res.sendStatus(401);
	} else {
		Session.verifySession(cookie)
			.then(result => {
				if (result == 401) {
					res.sendStatus(401);
				} else {
					res.sendStatus(200);
				}
			})
			.catch(err => {
				console.log(err);
			});
	}
});

module.exports = router;