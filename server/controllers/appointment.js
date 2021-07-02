const asyncHandler =  require('express-async-handler');
const validatorResults = require('express-validator');
const Appointment = require('../models/Appointment');
const Meeting = require('../models/Meeting');
const moment = require('moment-timezone');

// @route  POST api/appointment
// @des    Creates appointment
// @access Public
exports.createAppointment = asyncHandler(async (req, res) => {
    const { name, email, time } = req.body;
    const meeting = await Meeting.findOne({ meetingId: req.params.meetingId });

    if(!name && !email && !time) {
        return res.status(400).json({ msg: 'name, email, and time are required fields.'});
    }
     
    const appointment = new Appointment({
        meetingId: meeting,
        name: req.body.name,
        email: req.body.email,
        time: req.body.time,
        timezone: moment.tz.guess()
    });

    await appointment.save();
    res.json({ appointment });

});


// @route  GET api/appointments
// @des    Gets all appointments by user id
// @access Public
exports.getAllUserAppointments = asyncHandler(async (req, res) => {
    try{
        const userAppointments = await Appointment.findOne({ user: req.params.id });

        if(!userAppointments) {
            return res.status(404).json({ msg: 'User has no appointments.'});
        }

        res.json(userAppointments);
    } catch(err) {
        if(err.kind == 'ObjectsId') {
            return res.status(404).json({ msg: 'Appointments not found.'});
        }
        res.status(500).send('Server Error');
    }
});