'use strict';

const mongoose = require('../database/hospitals');

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

let hospitalSchema = Schema({
	created_at: {
		type: Date,
		default: Date.now
	},
	verified: {
		type: Boolean
	},
	hospitalInfo: {
		name: String,
		phone: String,
		email: {
			unique: true,
			index: true,
			type: String,
			validate: {
		      validator: (v) => /^[a-zA-Z0-9\+\.\_\%\-\+]{1,256}\@[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}(\.[a-zA-Z0-9\-]{0,25})+$/gi.test(v),
		      message: '{Value} is not a valid email address!'
	    	}
		},
		facilityId: String,
		facilityLicenseNumber: String
	},
	security: {
		hashed_password: String,
		temp_hashed_password: String,
		temp_hashed_password_time: Date
	},
	location: {
		address: String,
		city: String,
		state: String,
		county: String,
		zipcode: String,
		geoData: {
			type: { type: String },
			coordinates: []
		},
	},
	data: {
		ventilators: Number,
		gloves: Number,
		masks: Number,
		gowns: Number,
		respirators: Number,
		coronavirusTests: Number,
		coronavirusPatients: Number
	},
	bedData: {
		bedCount: Number,
		bedsInUse: Number
	},
	personnel: {
		totalStaff: Number,
		totalDoctors: Number,
		totalNurses: Number
	}
});

module.exports = hospitalSchema;