const Meeting = require("../models/Meeting");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

exports.createMeeting = asyncHandler(async (req, res, next) => {
  const { name, description, duration, url } = req.body;

  const generatedUrl = encodeURI(`${process.env.FRONT_END}/${req.user._id}/${req.user.username}/${url}/${duration}min`);

  const meetingCreated = await Meeting.create({
    userId: req.user._id,
    name,
    description,
    duration,
    url: generatedUrl,
  });
  if (meetingCreated) {
    console.log("meeting succesffully created");
    res.status(200).json({ success: { eventId: meetingCreated._id } });
  }
});

exports.getMeetings = asyncHandler(async (req, res, next) => {
  const meetings = await Meeting.find({ userId: req.user._id });
  if (meetings) {
    res.status(200).json({ success: meetings });
  }
});

exports.getSingleEvent = asyncHandler(async (req, res, next) => {
  console.log("🚀 ~ exports.getSingleEvent=asyncHandler ~ event", event);
  const event = await Meeting.find({ url: req.body.url });

  if (event) {
    console.log("🚀 ~ exports.getSingleEvent=asyncHandler ~ req.body.url", req.body.url);
    res.status(200).json({ success: event });
  }
});
