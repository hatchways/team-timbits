const express = require("express");
const router = express.Router();
const { checkAvailability } = require("../controllers/availability");

router.route("/:user/:day").get(checkAvailability);

module.exports = router;
