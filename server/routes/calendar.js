const express = require("express");
const router = express.Router();
const { loadCalendar } = require("../controllers/calendar");

router.route("/").get(loadCalendar);

module.exports = router;