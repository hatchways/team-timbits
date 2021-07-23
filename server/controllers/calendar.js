const User = require("../models/User")
const { google } = require('googleapis')
const asyncHandler = require("express-async-handler");

const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2( process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET )


exports.loadCalendar = asyncHandler(async (req, res) => {
    const user = await User.findOne({ username: req.body.username.replace(/%20/g, " ") });
    if (!user) return res.status(401).send("Invalid user")

    oAuth2Client.setCredentials({ refresh_token: user.refreshToken })
    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })
    
    return calendar;
})

exports.createEvent = asyncHandler(async(calendar, event) => {
    const res = await calendar.freebusy.query({
      resource: {
        timeMin: event.start.dateTime,
        timeMax: event.end.dateTime,
        timeZone: event.start.timeZone,
        items: [{ id: "primary" }],
      },
    });
  
    if (res.status !== 200) {
      throw new Error("Unable to get availability");
    }
  
    const events = res.data.calendars.primary.busy;
    if (events.length === 0) {
      return calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });
    } else {
      console.log("This time slot is already occupied in host user's calendar");
    }
  });