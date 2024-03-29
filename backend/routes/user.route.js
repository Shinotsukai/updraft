const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const keys = require("../config");


//load validation

const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

//load model
const User = require('../models/user.model');

//Register route

router.route('/register').post((req,res) => {
    //form validation

    const {errors, isValid} = validateRegisterInput(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email})
    .then(user => {
        if (user) {
            return res.status(400).json({email: "Email already exists"});
        } else {
            const newUser = new User ({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });

    // Hash password

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
            
        });
    });
        }
    });
});

//Login route

router.route('/login').post((req,res) => {

    //Validation

    const {errors, isValid} = validateLoginInput(req.body);

    //Check Validation

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    //find user by email

    User.findOne({email}).then(user => {
        //check if user exists
        if (!user) {
            return res.status(404).json({emailnotfound: "Email not found"});
        }

    //Check password
    bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
            //user match create jwt payload
            const payload = {
                id: user.id,
                username: user.username
            };

    //Sign token

            jwt.sign (
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31556926 //1 year in seconds
                },
                (err, token) => {
                    res.json({
                        success:true,
                        token:"Bearer " + token
                    });
                }
            );
        } else {
            return res.status(400).json({passwordincorrect: "Password incorrect"});
        }
    });
    });
});

module.exports = router;