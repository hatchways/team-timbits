const asyncHandler = require("express-async-handler");
const validatorResults = require("express-validator");
const Appointment = require("../models/Appointment");
const Meeting = require("../models/Meeting");
const moment = require("moment-timezone");

// @route  POST api/appointment
// @des    Creates appointment
// @access Public
exports.createAppointment = asyncHandler(async (req, res) => {
  const { name, email, time, url } = req.body;
  console.log("🚀 ~ exports.createAppointment=asyncHandler ~ url", url);

  const event = await Meeting.findOne({ url });
  console.log("🚀 ~ exports.createAppointment=asyncHandler ~ event", event);

  if (!name && !email && !time) {
    return res.status(400).json({ msg: "name, email, and time are required fields." });
  }

  const appointment = new Appointment({
    meetingId: event._id,
    eventName: event.name,
    name: req.body.name,
    email: req.body.email,
    time: req.body.time,
    timezone: moment.tz.guess(),
  });

  await appointment.save();
  res.json({ appointment });
});

// @route  GET api/appointments
// @des    Gets all appointments by user id
// @access Public
exports.getAllUserAppointments = asyncHandler(async (req, res) => {
  console.log("🚀 ~ exports.getAllUserAppointments=asyncHandler ~ req.params.id", req.params.id);
  const events = await Meeting.find({ userId: req.params.id });
  const eventIds = events.map((eachEvent) => {
    return eachEvent._id;
  });
  const userAppointments = await Appointment.find({ meetingId: { $in: eventIds } });

  if (userAppointments) {
    res.status(200).json({ success: userAppointments });
  }
});
