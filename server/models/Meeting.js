const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  duration: {
    type: Number,
  },
  url: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = Meeting = mongoose.model("meeting", meetingSchema);
