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
		gloves: {
			small: Number,
			medium: Number,
			large: Number,
			extraLarge: Number
		},
		faceShields: Number,
		surgicalMasks: Number,
		gowns: {
			size1: Number,
			size2: Number
		},
		respirators: {
			rNorth7130: Number,
			r3M8210: Number,
			r3M1860: Number
		},
		coronavirusTests: Number,
		coronavirusPatients: Number,
		coronavirusPUI: Number,
	},
	bedData: {
		bedCount: Number,
		bedsInUse: Number
	},
	personnel: {
		totalStaff: Number,
		totalDoctors: Number,
		totalNurses: Number
	},
	burnRateData: [{
		dayNumber: Number, 
		dayDate: {
			type: Date,
			default: Date.now
		},
		ventilators: Number,
				ventilators: Number,
		gloves: {
			small: Number,
			medium: Number,
			large: Number,
			extraLarge: Number
		},
		faceShields: Number,
		surgicalMasks: Number,
		gowns: {
			size1: Number,
			size2: Number
		},
		respirators: {
			rNorth7130: Number,
			r3M8210: Number,
			r3M1860: Number
		},
	}]
}, { collection: 'Hospitals'});

module.exports = hospitalSchema;