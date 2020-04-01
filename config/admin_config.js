'use strict';

require('dotenv').config();

const config = {
	app: {
		type: process.env.NODE_ENV,
		secret: 'LiliusMedPlatform'
	}
};

module.exports = config;