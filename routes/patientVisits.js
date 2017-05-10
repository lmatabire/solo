"use strict";
var _this = this;
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
router.get('/for_patient', function (req, res, next) {
    patientVisit_1.default.find({ userId: req.params._id }).then(function (patientVisits) {
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
    var patientVisit = new patientVisit_1.default();
    patientVisit.userId = req.body.userId;
    patientVisit.location = req.body.location;
    patientVisit.date = req.body.date;
    patientVisit.primaryDiagnosis = req.body.primaryDiagnosis;
    patientVisit.clinicalNotes = req.body.clinicalNotes;
    patientVisit.insurance = req.body.insurance;
    patientVisit.setPassword(req.body.password);
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
        patientVisit.userId = req.body.userId;
        patientVisit.doctorId = req.body.doctorId;
        patientVisit.location = req.body.location;
        patientVisit.date = req.body.date;
        patientVisit.primaryDiagnosis = req.body.primaryDiagnosis;
        patientVisit.clinicalNotes = req.body.clinicalNotes;
        patientVisit.insurance = req.body.insurance;
        if (req.body.role) {
            _this.user.role = req.body.role;
        }
        if (req.body.occupation) {
            _this.user.occupation = req.body.occupation;
        }
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
