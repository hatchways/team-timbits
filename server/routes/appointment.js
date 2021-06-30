const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createAppointment, getAllAppointments } = require("../controllers/appointment");

router.route("/appointment").post(createAppointment);

router.route("/appointments/:user_id").get(getAllAppointments);

module.exports = router;