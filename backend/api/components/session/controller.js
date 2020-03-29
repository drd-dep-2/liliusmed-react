'use strict';

const mongoose = require('../../../database/sessions');
const sessionModel = require('../../../models/hospitalSession');

// Schema
const Session = module.exports = mongoose.model('Sessions', sessionModel);

module.exports.verifySession = async(sessionId) => {
	
	await Session.find({ 'sessionId': sessionId }, (err, result) => {
		if (!result) {
			return 302;
		} else if (result == 'Ok') {
			return 200;
		}
	});
}