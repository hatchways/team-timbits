const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  meetingId: {
    type: mongoose.Types.ObjectId,
    ref: "meeting",
  },
  eventName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  timezone: {
    type: String,
  },
});

module.exports = Appointment = mongoose.model("appointment", AppointmentSchema);
