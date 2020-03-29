'use strict';

// Dependency Calls

const config = require('../../../config/api_config');

// Hospital Setup

const mongooseHospitals = require('../../../database/hospitals');
const profile = require('../../../models/hospitalProfile');
const Hospital = module.exports = mongooseHospitals.model('Hospitals', profile);

// Session Setup

const mongooseSession = require('../../../database/sessions');
const sessionModel = require('../../../models/hospitalSession');
const Session = module.exports = mongooseSession.model('Sessions', sessionModel);


module.exports.checkAndRender = async(sessionId) => {
	console.log('here');
	let session = await Session.findOne({ 'sessionId': sessionId });
	if (session == null) {
		return 401;
	} else {
		let email = session.email;
		let hospital = await Hospital.findOne({ 'hospitalInfo.email': email }).select('-security');
		return hospital;
	}
}