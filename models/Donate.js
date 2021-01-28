const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donateSchema = new Schema({
    requestedDate: {
        type: Date,
        required: true,
    },
    pickUpDate: {
        type: Date,
    },
    address: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['cancelled', 'pending', 'accepted', 'delivered'],
        default: 'pending'
    },
    charity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Charity',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
    },
    foodTypes: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Donate', donateSchema);