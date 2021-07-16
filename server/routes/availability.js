const express = require("express");
const router = express.Router();
const { checkAvailabilitiy } = require('../controllers/availability');

router.route('/:user/:day').get(checkAvailabilitiy);

module.exports = router;