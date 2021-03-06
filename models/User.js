const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    phoneNo: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);