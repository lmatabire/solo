import mongoose = require('mongoose');

let patientVisitSchema = new mongoose.Schema({
    userId: String,
    location: String,
    date: Date,
    primaryDiagnosis: String,
    clinicalNotes: String,
    insuarence: String
})

export default mongoose.model('PatientVisit', patientVisitSchema)
