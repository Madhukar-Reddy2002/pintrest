var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./posts');
const passport = require('passport');
const upload = require('./multer');

//User login
const localStratagy = require('passport-local');
const { title } = require('process');
passport.use(new localStratagy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', {error:req.flash('error')});
  console.log(req.flash("error"));
});
router.get('/feed', async function(req, res, next) {
  const posts = await postModel.find().populate('user');
  res.render('feed', { posts });
});

router.post('/upload', isLoggedIn, upload.single('file') , async function(req, res) {
  if(!req.file){return res.status(404).send("no files were uploaded");};
  const user = await userModel.findOne({username: req.session.passport.user});
  const post = await postModel.create({
    image:req.file.filename,
    imageText: req.body.caption,
    user: user._id
  });
  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});


router.post('/register', async (req, res) => {
  const { username, email, fullname, bio} = req.body;

  const userData = new userModel({
    username,
    email,
    fullname,
    bio
  });

  userModel.register(userData, req.body.password)
  .then(function(){
    passport.authenticate('local')(req, res, function(){
      res.redirect('/profile');
    })
  })
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash:true
}), (req,res)=>{});

router.get('/logout', function(req, res){
  req.logout(function(err){
    if(err){ return next(err);}
    res.redirect("/login")
  })
})

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

router.get('/profile', isLoggedIn, async function(req, res, next){
  const user = await userModel.findOne({
    username: req.session.passport.user
  }).populate('posts');
  res.render('profile', { user: user});
})

module.exports = router;