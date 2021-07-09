const Meeting = require("../models/Meeting");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

exports.createMeeting = asyncHandler(async (req, res, next) => {
  const { name, description, duration, url } = req.body;

  const generatedUrl = `/event/${req.user._id}/${url}`;
  try {
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
  } catch (err) {
    res.status(400).send(err);
  }
});

exports.getMeetings = asyncHandler(async (req, res, next) => {
  Meeting.find({ userId: req.user._id })
    .then((meetings) => {
      res.status(200).json({ success: meetings });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});
