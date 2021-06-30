const asyncHandler =  require('express-async-handler');
const validatorResults = require('express-validator');
const Appointment = require('../models/Appointment');
const Meeting = require('../models/Meeting');
const moment = require('moment-timezone');
//CREATE /appointment -> Create an appointment
//meeting_id, name, email, time (datetime), timezone
//GET /appointments -> list of appointments for logged in user

// @route  POST api/appointment
// @des    Creates appointment
// @access Public
exports.createAppointment = asyncHandler(async (req, res) => {
    const { name, email, time } = req.body;
    const meeting = await Meeting.findOne({ meetingId: req.params.user_id });
    
    const appointmentFields = {};
    appointmentFields.meetingId = meeting;
    if(name) appointmentFields.name = name;
    if(email) appointmentFields.email = email;
    if(time) appointmentFields.time = time;
    appointmentFields.timezone = moment.tz.guess();

    const newAppointment = new Appointment(appointmentFields);
    await newAppointment.save();
    res.json(newAppointment);
});


// @route  GET api/appointments
// @des    Gets all appointments by id
// @access Public
exports.getAllAppointments = asyncHandler(async (req, res) => {
    try {
        const appointments = await Appointment.findOne({ user: req.params.user_id });

        if(!appointments) return res.status(400).json({ msg: 'Appointments not found.'});
        res.json(appointments);
    } catch (err) {
        if(err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Appointments not found'});
        }
        res.status(500).send('Server Error');
    }
});