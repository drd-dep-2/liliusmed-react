'use strict';

'use strict';
// Server and Setup
const express = require('express');
const router = express.Router();
const path = require('path');

// Controller
const Hospital = require('./controller');
/*
router.use((req, res, next) => {
	let cookie = req.cookies.authCookie;
	console.log(cookie);

	if (cookie === undefined) {
		res.redirect('/');
	} else {
		next();
	}
});*/

// Get Dashboard
router.get('/dashboard/:email', (req, res) => {
	let email = req.params.email;

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

//Get Hospital Data for search by Hosptial Name
router.post('/dashboard/getHospitalData', async(req, res) => {

	
	let hospitalName = req.body.hospitalName;
	let sessionId = req.cookies.sessionId;
	
	const hospitalObj =  await Hospital.getHospitalByName(sessionId, hospitalName)
	res.json(hospitalObj)
});

module.exports = router;