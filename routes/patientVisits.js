"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.get('/', function (req, res, next) {
    PatientVisit.find().then(function (PatientVisits) {
        console.log('You have your hands in the cookie jar...');
        res.json(patientVisits);
    }).catch(function (err) {
        res.json(err);
    });
});
router.get('/:id', function (req, res, next) {
    PatientVisit.findOne({ _id: req.params.id }).then(function (PatientVisit) {
        console.log('');
        res.json(Patient);
    }).catch(function (err) {
        res.json(err);
    });
});
router.get('/doctors', function (req, res, next) {
    PatientVisit.find({ role: req.params.role }).then(function (doctors) {
        res.json(doctors);
    }).catch(function (err) {
        res.json(err);
    });
});
router.get('/patients', function (req, res, next) {
    PatientVisit.find({ role: req.params.role }).then(function (patients) {
        res.json(patients);
    }).catch(function (err) {
        res.json(err);
    });
});
router.post('/register', function (req, res) {
    var patientVisit = new PatientVisit();
    patientVisit.userId = req.body.userId;
    patientVisit.location = req.body.location;
    patientVisit.date = req.body.date;
    patientVisit.primaryDiagnosis = req.body.primaryDiagnosis;
    patientVisit.clinicalNotes = req.body.clinicalNotes;
    patientVisit.insuarence = req.body.insuarence;
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
    PatientVisit.findOne({ _id: req.body._id }).then(function (visit) {
        console.log("New Visit: ", req.body);
        patientVisit.userId = req.body.userId;
        patientVisit.location = req.body.location;
        patientVisit.date = req.body.date;
        patientVisit.primaryDiagnosis = req.body.primaryDiagnosis;
        patientVisit.clinicalNotes = req.body.clinicalNotes;
        patientVisit.insuarence = req.body.insuarence;
        if (req.body.role) {
            user.role = req.body.role;
        }
        if (req.body.occupation) {
            user.occupation = req.body.occupation;
        }
        user.save(function (err, newPatientVisit) {
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
    PatientVisit.remove({ _id: req.params.id }).then(function (visit) {
        console.log('You just deleted a visit', visit);
        res.json(visit);
    }).catch(function (err) {
        res.json(err);
    });
});
exports.default = router;
