const express = require('express');
const Donate = require('../models/Donate');
const auth = require('../routers/auth');

const router = express.Router();

router.route('/')
.get(auth.verifyAuth, auth.verifyUser, (req, res, next) => {
    Donate.find({user: { $in: req.user.id }})
    .populate("charity")
    .then(request => {
        res.status(200).json(request);
    }).catch(next);
})
.post(auth.verifyAuth, auth.verifyUser, (req, res, next) => {
    let request = req.body;
    Donate.create({ ... request, user: req.user.id })
    .then(request => {
        res.status(200).json(request);
    }).catch(next);
});


module.exports = router;
