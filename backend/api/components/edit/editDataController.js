'use strict';


// Hospital Setup

const mongooseHospitals = require('../../../database/hospitals');
const profile = require('../../../models/hospitalProfile');
const Hospital = module.exports = mongooseHospitals.model('Hospitals', profile);

// Session Setup

const mongooseSession = require('../../../database/sessions');
const sessionModel = require('../../../models/hospitalSession');
const Session = module.exports = mongooseSession.model('Sessions', sessionModel);


module.exports.editData = async(sessionId, data) => {

	let session = await Session.findOne({ 'sessionId': sessionId });
	if (session == null) {
		return 401;
	} else {

		let email = session.email;
		let data = {
			'data.ventilatorsAvaialable': data.ventilatorsAvaialable,
			'data.ventilatorsInUse': data.ventilatorsInUse,
			'data.gloves.small': data.gloves.small,
			'data.gloves.medium': data.gloves.medium,
			'data.gloves.large': data.gloves.large,
			'data.gloves.extraLarge': data.gloves.extraLarge,
			'data.faceShields': data.gloves.faceShields,
			'data.surgicalMasks': data.gloves.surgicalMasks,
			'data.gowns.small': data.gowns.small,
			'data.gowns.medium': data.gowns.medium,
			'data.gowns.large': data.gowns.large,
			'data.gowns.extraLarge': data.gowns.extraLarge,
			'data.respirators.n95': data.respirators.n95,
			'data.respirators.papr': data.respirators.papr,
			'data.coronavirusTests': data.coronavirusTests,
			'data.coronavirusPatients': data.coronavirusPatients,
			'data.coronavirusPUI': data.coronavirusPUI,
			'bedData.totalBedsInUse': data.totalBedsInUse,
			'bedData.icuBedsInUse': data.icuBedsInUse,
			'staff.totalStaff': data.totalStaff,
			'staff.doctors.onCall': data.doctors.onCall,
			'staff.doctors.onShift': data.doctors.onShift,
			'staff.doctors.total': data.doctors.total,
			'staff.nurses.onCall': data.nurses.onCall,
			'staff.nurses.onShift': data.nurses.onShift,
			'staff.nurses.total': data.nurses.total
		};

		await Hospital.findOneAndUpdate({ 'hospitalInfo.email': email }, { $set: data }, { upsert: false }, (err, hospital) => {
			if (err) {
				return 404;
			} else {
				return 200;
			}
		});

	}
}






