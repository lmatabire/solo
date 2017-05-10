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

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  User.findOne({_id:req.params.id}).then((user) => {
    console.log('');
    res.json(user);
  }).catch((err) => {
    res.json(err)
  });
});

router.get('/by_role/:role', function(req, res, next){
  console.log("getting by role")
  User.find({role:req.params.role}).then((users)=>{
    res.json(users)
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
})
router.post('/update', (req, res) => {
    User.findOne({_id:req.body._id}).then((user) => {
  console.log("New Data: ",req.body);
  user.username = req.body.username;
  user.email = req.body.email;
  if(req.body.role){
    user.role = req.body.role;
  }
  if(req.body.occupation){
      user.occupation = req.body.occupation;
  }
  user.save(function(err, newUser) {
    if (err) {
      console.log(err)
    } else {
      console.log("Added: ",newUser)
      res.end()
    }
  });
})
})
router.delete('/:id',(req, res)=>{
  User.remove({_id: req.params.id}).then((user)=>{
    console.log('You just deleted a user', user)
    res.json(user);
  }).catch((err)=>{
    res.json(err)
  })
})
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
