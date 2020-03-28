'use strict';

// Dependency Calls
 const config = require('../../../config/api_config');
 const mongoose = require('../../../database/hospitals');
 const profile = require('../../../models/hospitalProfile');
 // Schema
 const Hospital = module.exports = mongoose.model('hospitals', profile);

module.exports.login = async(email, projection) => {
	const docs = await Hospital.find({
		'hospitalInfo.email[0]': email,
	}, projection).limit(1).exec();

	// Error Handling - Model Return
	if (docs.length === 0) {
		throw {
			status: 404,
			message: 'Hospital Not Found'
		};
	}
	return docs[0];
}