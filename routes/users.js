"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_1 = require("../models/user");
var passport = require("passport");
var router = express.Router();
router.get('/', function (req, res, next) {
    user_1.default.find().then(function (users) {
        console.log('You have your hands in the cookie jar...');
        res.json(users);
    }).catch(function (err) {
        res.json(err);
    });
});
router.get('/:id', function (req, res, next) {
    user_1.default.findOne({ _id: req.params.id }).then(function (user) {
        console.log('');
        res.json(user);
    }).catch(function (err) {
        res.json(err);
    });
});
router.get('/doctors/:role', function (req, res, next) {
    console.log('We hit doctors');
    user_1.default.find({ role: req.params.role }).then(function (users) {
        res.json(users);
    }).catch(function (err) {
        res.json(err);
    });
});
router.get('/nurses/:role', function (req, res, next) {
    console.log("We hit nurses");
    user_1.default.find({ role: req.params.role }).then(function (users) {
        res.json(users);
    }).catch(function (err) {
        res.json(err);
    });
});
router.get('/patients/:role', function (req, res, next) {
    console.log('We hit the patients');
    user_1.default.find({ role: req.params.role }).then(function (users) {
        res.json(users);
    }).catch(function (err) {
        res.json(err);
    });
});
router.post('/register', function (req, res) {
    var user = new user_1.default();
    user.username = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save(function (err, newUser) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(newUser);
            res.end();
        }
    });
});
router.post('/update', function (req, res) {
    user_1.default.findOne({ _id: req.body._id }).then(function (user) {
        console.log("New Data: ", req.body);
        user.username = req.body.username;
        user.email = req.body.email;
        if (req.body.role) {
            user.role = req.body.role;
        }
        if (req.body.occupation) {
            user.occupation = req.body.occupation;
        }
        user.save(function (err, newUser) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Added: ", newUser);
                res.end();
            }
        });
    });
});
router.delete('/:id', function (req, res) {
    user_1.default.remove({ _id: req.params.id }).then(function (user) {
        console.log('You just deleted a user', user);
        res.json(user);
    }).catch(function (err) {
        res.json(err);
    });
});
router.post('/login', function (req, res, next) {
    if (!req.body.username || !req.body.password) {
        res.status(400).json({ message: "Please fill in all fields." });
    }
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (user) {
            return res.json({ token: user.generateJWT(req.body.role) });
        }
        return res.status(400).send(info);
    })(req, res, next);
});
exports.default = router;
