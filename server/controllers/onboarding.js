const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route  POST api/user/url
// @des    Checks for user for url and updates url with url & timezone
// @access Public
exports.checkUserUrl = asyncHandler(async (req, res, next) => {
  const { url } = req.body;
  const urlData = await User.findOne({ url: req.params.url });

  if (urlData === "" || !urlData.isUnique) {
    return res.status(400).json({ msg: "Url is not valid" });
  }

  res.status(200).json({ msg: "URL is valid" });
});

// @route  POST api/user/url/timezone
// @des    Update user url & timezone
// @access Public
exports.updateUser = asyncHandler(async (req, res, next) => {
  const { url, timezone } = req.body;
  const user = await User.findOne({ url: req.params.url }, { timezone: req.params.timezone });

  if (url === "" || !url.isUnique) {
    return res.status(400).json({ msg: "Url is not valid" });
  }

  if (!timezone) {
    return res.status(400).json({ msg: "Timezone is required" });
  }

  user.url = req.body.url;
  user.timezone = req.body.timezone;

  await user.save();
  res.json({ user });
});

// @route  POST api/availability/:hours/:days
// @des    Creates availability/
// @access Public
exports.createUserAvailability = asyncHandler(async (req, res) => {
  const { hours, days } = req.body;
  const availability = await User.findOne({ availability });

  if (!hours && !days) {
    return res.status(400).json({ msg: "hours, days, are required fields." });
  }

  availability.hours = req.body.hours;
  availability.days = req.body.hours;

  await availability.save();
  res.json({ availability });
});
