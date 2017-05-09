"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var patientVisitSchema = new mongoose.Schema({
    userId: String,
    location: String,
    date: Date,
    primaryDiagnosis: String,
    clinicalNotes: String,
    insuarence: String
});
exports.default = mongoose.model('PatientVisit', patientVisitSchema);
