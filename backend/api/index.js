'use strict';

module.exports = (app) => {

	
	// Api Routes
	let login = require('./components/login/index');
	let register = require('./components/register/index');
	let logout = require('./components/logout/index');
	let dashboard = require('./components/dashboard/index');
	let verify = require('./components/session/index');
	//let settings = require('./components/settings/index');
	//let support = require('./components/support/index');
	
	// Edit Routes
	/*
	let editBasicInfo = require('./components/edit/editBasicInfo');
	let updateBeds = require('./components/edit/updateBeds');
	let updateVents = require('./components/edit/updateVents');
	let updatePatients = require('./components/edit/updatePatients');
	let updatePersonnel = require('./components/edit/updatePersonnel');
	let updatePpe = require('./components/edit/updatePpe');
	let updatePpeRespirators = require('./components/edit/updatePpeRespirators');
	*/

	// Add Routes
	let routes = [register, logout, login, verify/*, settings, support, editBasicInfo, map, updateVents, updateBeds, updatePatients, updatePersonnel, updatePpe, updatePpeRespirators*/];

	app.use('/api', routes);
}
