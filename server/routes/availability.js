const express = require("express");
const router = express.Router();
const { checkAvailablitiy } = require('../controllers/availability');

router.route('/availability/:day').get(checkAvailablitiy);

module.exports = router;