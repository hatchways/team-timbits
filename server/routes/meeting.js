const express = require("express");
const router = express.Router();

const { createMeeting, getMeetings, getSingleEvent } = require("../controllers/meeting");
const { passportProtect } = require("../middleware/auth");

router.route("/").get(passportProtect, getMeetings);

router.route("/create").post(passportProtect, createMeeting);

router.route("/single-event").post(getSingleEvent);

module.exports = router;
