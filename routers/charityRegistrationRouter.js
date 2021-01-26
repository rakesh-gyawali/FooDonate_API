const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Charity = require('../models/Charity');
const express = require('express');

const router = express.Router();

//Login and Registration ...
router.post('/register', (req, res, next) => {

    let { phoneNo, password, name, logo, address, lat, long, email } = req.body;
    Charity.findOne({ email })
    .then(charity => {
        if (charity) {
            let err = new Error('Account already exists!');
            err.status = 400;
            return next(err);
        }
        bcrypt.hash(password, 10)
            .then((hash) => {
                Charity.create({ phoneNo, password: hash, name, logo, address, lat, long, email })
                    .then(charity => {
                        res.status(201).json({ "status": "Registration successful" });
                    })
            })
    }).catch(next);
});

router.post('/login', (req, res, next) => {
    let { phoneNo, password } = req.body;
    Charity.findOne({ phoneNo })
        .then((charity) => {
            if (!charity) {
                let err = new Error('Charity does not exists!');
                err.status = 400;
                return next(err);
            }
            bcrypt.compare(password, charity.password)
                .then(isMatch => {
                    if (!isMatch) {
                        let err = new Error('Password does not match!');
                        err.status = 400;
                        return next(err);
                    }
                    let payload = {
                        id: charity.id,
                        phoneNo: charity.phoneNo,
                        name: charity.name,
                        email: charity.lastName,
                    }
                    jwt.sign(payload, process.env.SECRET, (err, token) => {
                        if (err) return next(err);
                        res.json({
                            status: "Login successful",
                            token: `Bearer ${token}`
                        });
                    });
                })
        }).catch(next);
});
module.exports = router;