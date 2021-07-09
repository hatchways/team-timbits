const express = require("express");
const router = express.Router();

const { createMeeting, getMeetings } = require("../controllers/meeting");
const { passportProtect } = require("../middleware/auth");

router.route("/").get(passportProtect, getMeetings);

router.route("/create").post(passportProtect, createMeeting);

module.exports = router;
