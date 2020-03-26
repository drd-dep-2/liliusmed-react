'use strict';

// Deps
const express = require('express');
const compression = require('compression');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Sessions
const session = require('express-session');
const redis = require('redis');

let RedisStore = require('connect-redis')(session)
let redisClient = require('redis').createClient(process.env.REDIS_URL);

// Config
const config = require('./config/api_config');

// Init App
const app = module.exports = express();

redisClient.on('error', (err) => {
	console.log(`Redis Err: ${err}`);
});

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: config.app.secret,
    resave: false,
    saveUninitialized: true
  })
)

// App Setup
app.use(logger('dev'));

// Format Data as JSON 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
// View Engine
app.set('view engine', 'pug');
app.set('views', [__dirname, './client/views', __dirname, './api/views', __dirname, './admin/views']);
*/



// Static Files
app.use(express.static(path.join(__dirname, 'public')));


// Initialize Routing
require('./api/index')(app);
//require('./admin/index')(app);

// Compression
app.use(compression());

// Server 500 Handler
app.use((err, req, res, next) => {
	res.status(500).send('Server Error (500): ' + err);
});

module.exports = app;