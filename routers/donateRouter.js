const express = require('express');
const Request = require('../models/Donate');

const router = express.Router();

router.route('/')
.get((req, res, next) => {
    Request.find()
    .then(request => {
        res.status(200).json(request);
    }).catch(next);
})
.post((req, res, next) => {
    let request = req.body;
    Request.create(request)
    .then(request => {
        res.status(200).json(request);
    }).catch(next);
});

router.route('/:request_id')
.get((req, res, next) => {
    Request.findById(req.params.request_id)
    .then(request => {
        res.status(200).json(request);
    }).catch(next);
})
.put((req, res, next) => {
    Request.findByIdAndUpdate(req.params.request_id, req.body, {new: true})
    .then(request => {
        res.status(200).json(request);
    }).catch(next);
})
.delete((req, res, next) => {
    Request.findByIdAndDelete(req.params.request_id)
    .then(request => {
        res.status(200).json(request);
    }).catch(next);
});

module.exports = router;

