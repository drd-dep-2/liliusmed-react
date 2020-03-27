'use strict';

// Dependency Setup

const bcryptjs = require('bcryptjs');
const config = require('../../../config/api_config');

// Database
const mongoose = require('../../../database/hospitals');
const profile = require('../../../models/hospitalProfile');
const Hospital = module.exports = mongoose.model('Hospitals', profile);

async function hash(s) {
  const salt = await bcryptjs.genSalt(10);
  const hashed = await bcryptjs.hash(s, salt);
  return hashed;
}

async function verification(facilityId, original) {
	if (facilityId == original) {
		return true;
	} else {
		return false;
	}
}

module.exports.getAllHospitals = async() => {
	let query = Hospital.find({}).select('hospitalInfo.name hospitalInfo.fipsId');
	let doc = await query;
	return doc;
}

module.exports.registerHospital = async(info) => {

	const hashedPassword = await hash(info.password);
	const verification = await verification(info.facilityId, info.originalFacilityId);

	Hospital.findOne({ 'hospitalInfo.name': info.name }, (err, hospital) => {
		if (err) {
			throw {
				status: 500,
				message: err.message
			};
		} else {
			hospital.hospitalInfo.email = info.email;
			hospital.hospitalInfo.facilityLicesneNumber = info.facilityLicenseNumber;
			hospital.security.hashed_password = hashedPassword;
			hospital.verified = verification;

			hospital.save((err) => {
				if (!err) {
					return {
						status: 200,
						message: 'Hospital Successfully Registered and Verified'
					};
				} else {
					throw {
						status: 500,
						message: 'Hospital Could Not Be Registered'
					};
				}
			});
		}
	});
	

}