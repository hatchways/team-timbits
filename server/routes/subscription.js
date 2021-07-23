const express = require("express");
const router = express.Router();
const { createSubscription } = require("../controllers/subscription");

router.route("/create").post(createSubscription);

module.exports = router;
