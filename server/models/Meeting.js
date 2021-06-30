const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  duration: {
    type: Number,
  },
});

module.exports = Meeting = mongoose.model("meeting", meetingSchema);
