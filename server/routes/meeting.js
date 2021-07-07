const express = require("express");
const router = express.Router();

const { createMeeting, getMeetings } = require("../controllers/meeting");

router.route("/").get(getMeetings);

//TODO protect this route with passportProtect
router.route("/create").post(createMeeting);

module.exports = router;
