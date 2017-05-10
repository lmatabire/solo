import mongoose = require('mongoose');

let patientVisitSchema = new mongoose.Schema({
    userId: String,
    doctorId: String,
    location: String,
    date: Date,
    primaryDiagnosis: String,
    clinicalNotes: String,
    insurance: String
})

export default mongoose.model('PatientVisit', patientVisitSchema)
