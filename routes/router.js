const express = require('express');
const router = express.Router();

// Pages required
const homepage = require('./index');
const login = require('./log-in');
const register = require('./register');
const swipe = require('./swipe');


//Make routes
router.use('/', homepage);
router.use('/', login);
router.use('/', register);
router.use('/', swipe);


module.exports = router;    