'use strict';
// Server and Setup
const express = require('express');
const router = express.Router();

const CountyPPe = require('./countyPpeController');

router.get('/county/data/ppeNumbers', (req, res) => {
	let cookie = req.sessions.sessionId;

	if (!cookie) {
		res.json({status : "No Session"});
	} else {
		CountyPpe.getCountyData(cookie, fipsId)
			.then(result => {
				if (result.status == "No Session") {
					res.json({status : "No Session"});
				} else {
					res.json({status : "Valid Session"})
				}
			})
			.catch(err => {
				console.log(err);
			});
	}
});

module.exports = router;