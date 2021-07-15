const Meeting = require("../models/Meeting");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

exports.createMeeting = asyncHandler(async (req, res, next) => {
  const { name, description, duration, url } = req.body;

  const generatedUrl = `/event/${req.user._id}/${url}`;

  const meetingCreated = await Meeting.create({
    userId: req.user._id,
    name,
    description,
    duration,
    url: generatedUrl,
  });
  if (meetingCreated) {
    res.status(200).json({ eventId: meetingCreated._id });
  }
});

exports.getMeetings = asyncHandler(async (req, res, next) => {
  const meetings = await Meeting.find({ userId: req.user._id });
  if (meetings) {
    res.status(200).json({ success: meetings });
  }
});
