const express = require('express')
const router = express.Router();
const Executives = require('../models/useModel');
const permissions = require('../permissions');
const passport = require('passport');
const path = require('path');


router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "/login.html"));
});

router.post('/login',
  passport.authenticate('local', {failureRedirect: '/login'}),(req, res)=>{
      req.session.user = req.user;
      const role = permissions[req.user.role]
      res.redirect(role.homepage+'?userid=' +req.user.id);
  }
);

// router.post("/", async (req, res) => {
    
//   try {
//       var user = new Executives(req.body)
//       await  Executives.register(user, req.body.firstName, (err)=>{
//           if (err) {throw err}
//           res.redirect('/login')
//       })
//   } catch(error){
//       res.status(400).send("unable to save to database");
//   }
// });


module.exports = router;

