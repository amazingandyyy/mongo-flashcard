'use strict';

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/cards', require('./cards'))

module.exports = router;
