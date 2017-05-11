import mongoose = require('mongoose');

let patientVisitSchema = new mongoose.Schema({
    userId: String,
    patient:{
        _id:String,
        username:String,
        email:String,
        phone:String,
        firstName:String,
        lastName:String,
        title:String,
        occupation:String,
        sex:String
    },
    doctor:{
        _id:String,
        username:String,
        email:String,
        phone:String,
        firstName:String,
        lastName:String,
        title:String,
        occupation:String
    },
    location: String,
    caseType:String,
    date: Date,
    primaryDiagnosis: String,
    clinicalNotes: String,
    insurance: String
});

export default mongoose.model('PatientVisit', patientVisitSchema)
