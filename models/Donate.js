const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donateSchema = new Schema({
    requestedDate: {
        type: String,
        required: true,
    },
    pickUpDate: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
    lats: {
        type: String,
        required: true
    },
    longs: {
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
        type: String,
    },
    foodTypes: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Donate', donateSchema);