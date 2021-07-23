const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  hours: {
      type: String,
      required: true,
  },
  days: {
      type: String,
      required: true,
  }
});

module.exports = Availability = mongoose.model("availability", availabilitySchema);