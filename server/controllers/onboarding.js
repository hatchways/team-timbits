const User = require('../models/User');
const asyncHandler = require('express-async-handler');

// @route  POST api/user/url
// @des    Checks for user for url and updates url with url & timezone
// @access Public
exports.checkUserUrl = asyncHandler(async (req, res, next) => {
    const { url } = req.body;
    const user = await User.findOne({ url: req.params.url , timezone: req.body.timezone});

    if (url === '' || !url.isUnique) {
        return res.status(400).json({ msg: 'Url is not valid' });
    }
     
    const user = new User({
      url: req.boby.url,
    });

    await user.save();
    res.json({ user });

});



// @route  POST api/availability/:hours/:days
// @des    Creates availability/
// @access Public
exports.createUserAvailability = asyncHandler(async (req, res) => {
  const { hours, days } = req.body;
  const  availability = await User.findOne({ availabilityId });

  if(!hours && !days) {
      return res.status(400).json({ msg: 'hours, days, are required fields.'});
  }
   
  const availability = new Availability({
    hours: req.body.hours,
    days: req.body.days
  });

  await availability.save();
  res.json({ availability });

});