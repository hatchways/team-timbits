const express = require("express");
const router = express.Router();
const { checkUserUrl } = require('../controllers/onboarding');

router.route("/onboarding").get(checkUserUrl);

module.exports = router;