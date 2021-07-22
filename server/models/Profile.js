const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    url: {
        type: String,
        required: true,
    },
    timezone: {
        type: String,
        required: true,
    },
    hours: {
        type: Array,
        required: true,
    },
    days: {
        type: Array,
        required: true,
    }
});

module.exports = Profile = mongoose.model("profile", profileSchema);