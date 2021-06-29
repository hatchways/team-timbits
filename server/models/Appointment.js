const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    meeting_id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    timezone: {
        type: Date,
        default: Date.getTimezoneOffset()
    }
});

module.exports = mongoose.model('appointment', AppointmentSchema);