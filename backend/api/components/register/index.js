'use strict';

// Server Setup & Config
const express = require('express');
const router = express.Router();
const path = require('path');
const config = require('../../../config/api_config');
const Hospital = require('./controller');

// Get Register Page
// Add API Call to Get all Hosptial Names and Send to Array
router.get('/register', (req, res) => {
	res.send('API Functional');
});

// Register Form Submission - POST
router.post('/register/hospital', (req, res) => {

	const email = req.body.email;
	const password = req.body.password;
	const facilityId = req.body.facilityId;
	const facilityLicenseNumber = req.body.facilityLicenseNumber;
	const originalFacilityId = req.body.originalFacilityId;

	let formCheck = req.body.formCheck;
	let upperFormCheck = formCheck.toString().toUpperCase();

	let info = {
		email: email,
		password: password,
		facilityId: facilityId,
		originalFacilityId: originalFacilityId,
		facilityLicenseNumber: facilityLicenseNumber
	};

	if (!upperFormCheck || upperFormCheck !== 'WHITE') {
		res.redirect('/api/register');
	} else {
		Business.registerHospital(info)
			.then(result => {
				res.redirect('/api/login');
			})
			.catch(err => {
				if (err.status) {
					res.status(err.status).json({
						message: err.message
					});
				} else {
					//console.log(err);
					res.status(500).json({
						message: err
					});
				}
			});
	}
});

module.exports = router;
