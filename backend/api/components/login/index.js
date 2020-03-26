'use strict';
// Server and Setup
const express = require('express');
const router = express.Router();
const path = require('path');
const config = require('../../../config/api_config');

// Login & Security
const Hospital = require('./controller');
const auth = require('basic-auth');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

// Render Page
router.get('/login', (req, res) => {
	res.send(200);
});

// Login Form Submission
router.post('/login/authenticate', (req, res) => {

	// Set Form Body Fields
	let email = req.body.email;
	let password = req.body.password;

	// Login Controller
	Hospital.login(email)
		.then(async(result) => {
			let hospital = result;
			await bcryptjs.compare(password, hospital.security.hashed_password, (err, val) => {
				if (err) {
					res.status(401).json(reuslt);
				} else if (val == true) {
					const token = jwt.sign({ email }, config.app.secret);
					res.redirect('/api/dashboard/' + email + '/' + token);
				} else {
					res.redirect('/api/login');
				}
			});
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