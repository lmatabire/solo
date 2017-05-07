import * as express from 'express';
import User from '../models/user';
import * as passport from 'passport';
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().then((users) => {
    console.log('You have your hands in the cookie jar...');
    res.json(users);
  }).catch((err) => {
    res.json(err)
  });
});
router.get('/doctors', function(req, res, next){
  User.find({role: req.params.role}).then((doctors)=>{
    res.json(doctors)
  }).catch((err)=>{
    res.json(err)
  });
});
router.get('/patients', function(req, res, next) {
  User.find({role: req.params.role}).then((patients)=>{
      res.json(patients)
  }).catch((err)=>{
    res.json(err)
  });
});
router.post('/register', (req, res) => {
  let user: any = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.setPassword(req.body.password);
  user.save(function(err, newUser) {
    if (err) {
      console.log(err)
    } else {
      console.log(newUser)
      res.end()
    }
  });
});

router.post('/login', (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ message: "Please fill in all fields." });
  }

  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (user) {
      return res.json({ token: user.generateJWT(req.body.role) });
    }
    return res.status(400).send(info);
  })(req, res, next);
})

export default router;
