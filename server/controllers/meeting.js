const Meeting = require("../models/Meeting");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

exports.createMeeting = asyncHandler(async (req, res, next) => {
  const { name, description, duration, url } = req.body;
  //const id = req.session.userId
  const id = "60df3ce18133445ba87a4fee";
  const generatedUrl = `/event/${id}/${url}`;
  const meetingCreated = await Meeting.create({
    userId: id,
    name,
    description,
    duration,
    url: generatedUrl,
  });
  if (meetingCreated) {
    res.status(200).json({ eventId: meetingCreated._id });
  }
  //TODO handle error
});

exports.getMeetings = asyncHandler(async (req, res, next) => {
  const { username } = req.body;
  const loggedInUser = await User.findOne({ username });

  Meeting.find({ userId: loggedInUser._id }).then((meetings) => {
    res.json(meetings);
  });
});
