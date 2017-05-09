import * as express from 'express';
import User from '../models/user';
import * as passport from 'passport';
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  PatientVisit.find().then((PatientVisits) => {
    console.log('You have your hands in the cookie jar...');
    res.json(patientVisits);
  }).catch((err) => {
    res.json(err)
  });
});
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  PatientVisit.findOne({_id:req.params.id}).then((PatientVisit) => {
    console.log('');
    res.json(Patient);
  }).catch((err) => {
    res.json(err)
  });
});
router.get('/doctors', function(req, res, next){
  PatientVisit.find({role: req.params.role}).then((doctors)=>{
    res.json(doctors)
  }).catch((err)=>{
    res.json(err)
  });
});
router.get('/patients', function(req, res, next) {
  PatientVisit.find({role: req.params.role}).then((patients)=>{
      res.json(patients)
  }).catch((err)=>{
    res.json(err)
  });
});
router.post('/register', (req, res) => {
  let patientVisit: any = new PatientVisit();
  patientVisit.userId = req.body.userId;
  patientVisit.location = req.body.location;
  patientVisit.date = req.body.date;
  patientVisit.primaryDiagnosis = req.body.primaryDiagnosis;
  patientVisit.clinicalNotes = req.body.clinicalNotes;
  patientVisit.insuarence = req.body.insuarence;
  patientVisit.setPassword(req.body.password);
  patientVisit.save(function(err, newPatientVisit) {
    if (err) {
      console.log(err)
    } else {
      console.log(newPatientVisit)
      res.end()
    }
  });
})
router.post('/update', (req, res) => {
    PatientVisit.findOne({_id:req.body._id}).then((visit) => {
  console.log("New Visit: ",req.body);
  patientVisit.userId = req.body.userId;
  patientVisit.location = req.body.location;
  patientVisit.date = req.body.date;
  patientVisit.primaryDiagnosis = req.body.primaryDiagnosis;
  patientVisit.clinicalNotes = req.body.clinicalNotes;
  patientVisit.insuarence = req.body.insuarence;
  if(req.body.role){
    user.role = req.body.role;
  }
  if(req.body.occupation){
      user.occupation = req.body.occupation;
  }
  user.save(function(err, newPatientVisit) {
    if (err) {
      console.log(err)
    } else {
      console.log("Added: ",newPatientVisit)
      res.end()
    }
  });
})
})
router.delete('/:id',(req, res)=>{
  PatientVisit.remove({_id: req.params.id}).then((visit)=>{
    console.log('You just deleted a visit', visit)
    res.json(visit);
  }).catch((err)=>{
    res.json(err)
  })
})

export default router;
