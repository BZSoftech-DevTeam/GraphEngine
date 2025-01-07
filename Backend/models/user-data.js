const mongoose = require('mongoose');
const moment = require('moment'); // for date manipulation
const cron = require('node-cron'); // for scheduling

const userStatisticsSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
    },
    OTP: {
        type: String,
        required: false,
    },
    purchasedOn: {
        type: String,
        required: false,
        default: "",
    },
    purchasedExpiry: {
        type: String,
        required: false,
        default: "",
    },
    package: {
        type: String,
        required: false,
        default: "",
    },
    status: {
        type: String,
        required: false,
        default: "basic",
    }
}, { timestamps: true });

const USD = mongoose.model('user-information', userStatisticsSchema);
module.exports = USD;
