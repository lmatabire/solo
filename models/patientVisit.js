"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var patientVisitSchema = new mongoose.Schema({
    userId: String,
    doctorId: String,
    location: String,
    date: Date,
    primaryDiagnosis: String,
    clinicalNotes: String,
    insurance: String
});
exports.default = mongoose.model('PatientVisit', patientVisitSchema);
