'use strict';

const express = require('express');
const router = express.Router();

// GET /logout
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/api/login');
});

module.exports = router;