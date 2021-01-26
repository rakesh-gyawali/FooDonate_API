const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new Schema({
    phoneNo: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
    },
    address: {
        type: String,
    },
    lat: {
        type: String,
    },
    long: {
        type: String,
    },
    email: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Charity', charitySchema);