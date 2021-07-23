const express = require("express");
const router = express.Router();
const { settings } = require("../controllers/profile");

router.route("/").get(settings);

module.exports = router;