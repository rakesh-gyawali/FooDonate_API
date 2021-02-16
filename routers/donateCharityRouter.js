const express = require('express');
const Donate = require('../models/Donate');
const auth = require('./auth');

const router = express.Router();

router.route('/')
.get(auth.verifyAuth, auth.verifyCharity, (req, res, next) => {
    Donate.find({charity: { $in: req.user.id }})
    .populate("user")
    .then(request => {
        res.status(200).json(request);
    }).catch(next);
});

router.route('/:request_id')

.get((req, res, next) => {
    Donate.findById(req.params.request_id)
    .then(request => {
        res.status(200).json(request);
    }).catch(next);
})

.put(auth.verifyAuth, auth.verifyCharity, (req, res, next) => {
    console.log(req.params.request_id);
    Donate.findByIdAndUpdate(req.params.request_id, { $set: req.body }, {new: true})
    .then(request => {
        res.status(201).json(request);
    }).catch(next);
})
.delete((req, res, next) => {
    Donate.findByIdAndDelete(req.params.request_id)
    .then(request => {
        res.status(200).json(request);
    }).catch(next);
});

module.exports = router;

