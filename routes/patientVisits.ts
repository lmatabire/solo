import * as express from 'express';
import PatientVisit from '../models/patientVisit';
import * as passport from 'passport';
import Users from '../models/user';
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  PatientVisit.find().then((patientVisits) => {
    console.log('You have your hands in the cookie jar...');
    res.json(patientVisits);
  }).catch((err) => {
    res.json(err)
  });
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  PatientVisit.findOne({_id:req.params.id}).then((Patient) => {
    console.log('');
    res.json(Patient);
  }).catch((err) => {
    res.json(err)
  });
});

router.get('/for_patient', function(req, res, next) {
  PatientVisit.find({userId: req.params._id}).then((patientVisits)=>{
      res.json(patientVisits)
  }).catch((err)=>{
    res.json(err)
  });
});

router.get('/for_doctor', function(req, res, next) {
  PatientVisit.find({doctorId: req.params._id}).then((patientVisits)=>{
      res.json(patientVisits)
  }).catch((err)=>{
    res.json(err)
  });
});

router.post('/create', (req, res) => {

  console.log("New Visit: ",req.body);
  let patientVisit: any = new PatientVisit(req.body);
  patientVisit.date = new Date();


  patientVisit.save(function(err, newPatientVisit) {
    if (err) {
      console.log(err)
    } else {
      console.log(newPatientVisit);
      res.end()
    }
  });
});
router.post('/update', (req, res) => {
    PatientVisit.findOne({_id:req.body._id}).then((patientVisit) => {
     console.log("New Visit: ", req.body);
     patientVisit = req.body;
     patientVisit.save(function(err, newPatientVisit) {
       if (err) {
         console.log(err)
       } else {
         console.log("Added: ",newPatientVisit);
         res.end()
       }
     });
   });

});
router.delete('/:id',(req, res)=>{
  PatientVisit.remove({_id: req.params.id}).then((visit)=>{
    console.log('You just deleted a visit', visit);
    res.json(visit);
  }).catch((err)=>{
    res.json(err)
  })
});

export default router;
