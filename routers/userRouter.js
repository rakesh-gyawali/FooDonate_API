const express = require('express');
const User = require('../models/User');
const auth = require('./auth');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.route('/')
.get(auth.verifyAuth, (req, res, next) => {
    User.findById(req.user.id)
    .then(user => {
        const phoneNo = user.phoneNo;
        const firstName = user.firstName;
        const lastName = user.lastName
        const profilePicture = user.profilePicture;

        const userDetail = {phoneNo, firstName, lastName, profilePicture};
        res.status(200).json(userDetail);
    }).catch(next);
})
.put(auth.verifyAuth, (req, res, next) => {
    let { phoneNo, password, firstName, lastName, profilePicture } = req.body;
    bcrypt.hash(password, 10)
    .then((hash) => {
        User.findOneAndUpdate(req.user.id, { ... req.body, password: hash }, {new: true})
        .then(user => {
            res.status(201).json(user);
        })
    }).catch(next);

});

module.exports = router;    