const asyncHandler =  require('express-async-handler');

// Models
//const User = require("../models/User");
const Profile = require('../models/Profile');

exports.settings = asyncHandler(async (req, res) => {
    const { id } = req.user;
    const userSettings = await Profile.find({ id })
    userSettings.length ? res.status(200).json(userSettings) : res.status(200).json({ user: 'does not exist' })
})

// on login check this and depending if there are settings the view will be different