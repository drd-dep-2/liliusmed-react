'use strict';

const mongoose = require('../../../database/sessions');
const sessionModel = require('../../../models/hospitalSession');

// Schema
const Session = module.exports = mongoose.model('Sessions', sessionModel);

module.exports.verifySession = async(sessionId) => {

	let session = await Session.findOne({ 'sessionId': sessionId });
	if (session == null) {
		return 401;
	} else {
		return 200;
	}
}