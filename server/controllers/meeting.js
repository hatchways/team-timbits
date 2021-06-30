const Meeting = require("../models/Meeting");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

exports.createMeeting = asyncHandler(async (req, res, next) => {
  const { username, duration } = req.body;
  const loggedInUser = await User.findOne({ username }).then((doc) => {
    const meeting = Meeting.create({
      user_id: doc._id,
      duration: duration,
    });
  });
  res.status(200).json({ username, duration });
});

exports.getMeetings = asyncHandler(async (req, res, next) => {
  Meeting.find({}).then((data) => {
    res.json(data);
  });
});
