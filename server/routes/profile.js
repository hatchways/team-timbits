const express = require("express");
const router = express.Router();
const { settings, createSettings, existingUrl } = require("../controllers/profile");

router.route("/").get(settings);
router.route("/save").post(createSettings);
router.route('/existingUrl').post(existingUrl);

module.exports = router;