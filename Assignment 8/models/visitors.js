const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
    },
    email: {
        type: String,
        trim: true,
    },
    phone: {
        type: Number,
    },
    isAvailable: {
        type: Boolean,
    },
    entryTime: {
        type: String,
        trim: true,
    },
    exitTime: {
        type: String,
        default: "-",
        trim: true,
    },
});

const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;
