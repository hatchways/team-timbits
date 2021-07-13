const asyncHandler = require('express-async-handler');
const { google } = require('googleapis');
const User = require('../models/User');


exports.checkAvailablitiy =  asyncHandler(async(res, req, next) => {
  const { hours } = await User.findOne({ availability: req.params.hours });
  const calendar = 'primary';
  const cal = google.calendar({
    version: 'v3',
    auth: `${process.env.GOOGLE_CLIENT_ID}`
  });

  // Make the query
  cal.freebusy.query({
      resource: {
          // Set times to ISO strings as such
          timeMin: hours[0].toISOString(), 
          timeMax: hours[1].toISOString(),
          timeZone: 'UTC',
          items: [{ id: calendar }]
      }
  }).then((res) => {
      const busy = res.data.calendars[calendar].busy;
      const errors = res.data.calendars[calendar].errors;
      if (undefined !== errors) {
          console.error('Check this calendar for public free busy visibility');
      } else if (busy.length !== 0) {
          console.log('Busy');
      } else {
        return cal.calendar.calendarList.get({ calendarId: 'primary'});
    }
  }).catch((e) => {
    return res.statusCode(400).json(e);
  });
});

