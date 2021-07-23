const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createAppointment, getAllUserAppointments } = require("../controllers/appointment");

router.route("/").post(createAppointment);

router.route("/:id").get(getAllUserAppointments);

module.exports = router;
