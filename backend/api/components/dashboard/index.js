'use strict';

'use strict';
// Server and Setup
const express = require('express');
const router = express.Router();
const path = require('path');

// Controller
const Hospital = require('./controller');


function isAuthenticated(req, res, next) {

	let cookie = req.cookie.auth;
	console.log(cookie);

	if (req.user.authenticated) {
		return next();
	} else {
		res.redirect('/');
	}
}

// Get Dashboard
router.get('/dashboard/:email', isAuthenticated, (req, res) => {
	let token = req.params.token;
	let email = req.params.email;
	let cookie = req.cookie.auth;

	console.log(cookie);
	Hospital.findHospitalByEmail(email)
		.then(result => {
			res.status(200).json({
				email: email
			})
		})
		.catch(err => {
			res.status(500).json({
				code: 500,
				note: 'Internal Server Error',
				message: err.message
			});
		});
});

module.exports = router;