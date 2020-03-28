'use strict';

const mongoose = require('../../../database/sessions');
const sessionModel = require('../../../models/hospitalSession');

// Schema
const Session = module.exports = mongoose.model('Sessions', sessionModel);

module.exports.setSession = async(email, randomString) => {
	let session = {
		sessionId: randomString,
		email: email
	};

	Session.create(session, (err, session) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Success!');
			console.log(session);
		}
	});

}