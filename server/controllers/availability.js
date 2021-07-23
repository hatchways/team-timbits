const asyncHandler = require('express-async-handler');
const { google } = require('googleapis');
const User = require('../models/User');
const Meeting = require('../models/Meeting');

exports.checkAvailability =  asyncHandler(async(req, res, next) => {
  const { day } = req.params.day;
  const userOfMeeting = Meeting.findOne({userId: req.params.user});
  const userAvailability = User.findOne({ availablility: userOfMeeting });
  const lookUpDate = userAvailability[day] = day;

  const calendar = 'primary';
  const cal = google.calendar({
    version: 'v3',
    auth: `${process.env.GOOGLE_CLIENT_ID}`,
  });

  // Make the query
  cal.freebusy.query({
      resource: {
          // Set times to ISO strings as such
          timeMin: Date.parse(lookUpDate),
          timeZone: 'UTC',
          items: [{ id: calendar }]
      }
  }).then((res) => {
      const busy = res.data.calendars[calendar].busy;
      const errors = res.data.calendars[calendar].errors;
      if(errors) return res.status(400).json({ errors });
      res.json({ busy });
  })
});

