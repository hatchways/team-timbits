const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createAppointment, getAllAppointments } = require("../controllers/appointment");

router.route("/").post(createAppointment);

router.route("/user_id").get(getAllAppointments);

module.exports = router;