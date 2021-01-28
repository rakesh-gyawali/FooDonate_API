const express = require('express');
const User = require('../models/User');
const auth = require('./auth');

const router = express.Router();

router.route('/')
.get(auth.verifyUser, (req, res, next) => {
    User.findById(req.user.id)
    .then(user => {
        let userDetail =  { phoneNo, firstName, lastName, profilePicture }  = user; 
        res.status(200).json(userDetail);
    }).catch(next);
})
.put(auth.verifyUser, (req, res, next) => {
    User.findByIdAndUpdate(req.user.id, req.body, { new: true })
    .then(user => {
        res.status(200).json(user);
    }).catch(next);
});

module.exports = router;    