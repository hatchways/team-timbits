const asyncHandler =  require('express-async-handler');

// Models
const Profile = require('../models/Profile');

exports.settings = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const userSettings = await Profile.find({ id: _id })
    userSettings.length ? res.status(200).json(userSettings) : res.status(200).json()
})

exports.existingUrl = asyncHandler(async (req, res) => {
    const { url } = req.body
    const existingUrl = await Profile.find({ url })
    existingUrl.length === 0 ? res.status(200).json() : res.status(200).json({ error: 'url already in use'})
})

exports.createSettings = asyncHandler(async (req, res) => {
    const { id, url, timezone, hours, unavailable  } = req.body;

    const settings = new Profile({ id, url, timezone, hours, days: unavailable});
    await settings.save();

    res.status(200).send('success');
})