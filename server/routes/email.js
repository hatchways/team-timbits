const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/email");

// @route post /email/send
router.route("/send").post(sendEmail);

module.exports = router;
