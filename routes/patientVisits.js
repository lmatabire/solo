"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var patientVisit_1 = require("../models/patientVisit");
var router = express.Router();
router.get('/', function (req, res, next) {
    patientVisit_1.default.find().then(function (patientVisits) {
        console.log('You have your hands in the cookie jar...');
        res.json(patientVisits);
    }).catch(function (err) {
        res.json(err);
    });
});
router.get('/:id', function (req, res, next) {
    patientVisit_1.default.findOne({ _id: req.params.id }).then(function (Patient) {
        console.log('');
        res.json(Patient);
    }).catch(function (err) {
        res.json(err);
    });
});
router.post('/for_patient', function (req, res, next) {
    console.log(req.body);
    patientVisit_1.default.find({ "patient._id": req.body._id }).then(function (patientVisits) {
        res.json(patientVisits);
    }).catch(function (err) {
        res.json(err);
    });
});
router.get('/for_doctor', function (req, res, next) {
    patientVisit_1.default.find({ doctorId: req.params._id }).then(function (patientVisits) {
        res.json(patientVisits);
    }).catch(function (err) {
        res.json(err);
    });
});
router.post('/create', function (req, res) {
    console.log("New Visit: ", req.body);
    var patientVisit = new patientVisit_1.default(req.body);
    patientVisit.date = new Date();
    patientVisit.save(function (err, newPatientVisit) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(newPatientVisit);
            res.end();
        }
    });
});
router.post('/update', function (req, res) {
    patientVisit_1.default.findOne({ _id: req.body._id }).then(function (patientVisit) {
        console.log("New Visit: ", req.body);
        patientVisit = req.body;
        patientVisit.save(function (err, newPatientVisit) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Added: ", newPatientVisit);
                res.end();
            }
        });
    });
});
router.delete('/:id', function (req, res) {
    patientVisit_1.default.remove({ _id: req.params.id }).then(function (visit) {
        console.log('You just deleted a visit', visit);
        res.json(visit);
    }).catch(function (err) {
        res.json(err);
    });
});
exports.default = router;
