const express = require('express');
const Charity = require('../models/Charity');

const router = express.Router();

router.route('/')
.get((req, res, next) => {
    Charity.find()
    .then(user => {
        res.status(200).json(user);
    }).catch(next);
});

router.route('/:charity_id')
.get((req, res, next) => {
    Charity.findById(req.params.charity_id)
    .then(charity => {
        res.status(200).json(charity);
    }).catch(next);
})
.put((req, res, next) => {
    Charity.findByIdAndUpdate(req.params.charity_id, req.body, {new: true})
    .then(updatedCharity => {
        res.status(200).json(updatedCharity);
    }).catch(next);
});

module.exports = router;

