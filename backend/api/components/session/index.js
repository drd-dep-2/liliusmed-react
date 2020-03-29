'use strict';

const express = require('express');
const router = express.Router();
const Session = require('./controller');

router.use(require('cookie-parser')());

router.post('/verifySession', (req, res) => {
	let cookie = req.cookies.sessionId;

	if (!cookie) {
		console.log('Cookie Not Found');
		/*res.sendStatus(401).json({
			message: 'Not Found'
		}); */
	} else {
		Session.verifySession(cookie)
			.then(result => {
				if (result == 200) {
					res.sendStatus(200);
				} else {
					res.sendStatus(401);
				}
			})
			.catch(err => {
				console.log(err);
			});
	}
});

module.exports = router;