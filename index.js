const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const loginRoutes = require('./routes/loginRoutes');
const Executives = require('./models/useModel');
const userRoutes = require('./routes/userRoutes');
const session = require('express-session')
const path = require("path");
const passport = require('passport');

const server = express();
var PORT = process.env.PORT || 2001;


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(passport.initialize());
passport.use(Executives.createStrategy())
passport.serializeUser(Executives.serializeUser())
passport.deserializeUser(Executives.deserializeUser())

server.use(session({
  secret: 'thesecret',
  resave: true,
  saveUninitialized: false
}))

server.use(express.static("public"));
server.set('view engine','pug')
server.set('views', __dirname + '/views')


server.use('/', loginRoutes);
server.use('/user',userRoutes);

// mongoose.connect(
//   "mongodb://localhost:27017/bodaboda",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function(err) {
//     if (err) throw err;
//     console.log("Successfully connected to dbase");
//   });

  const uri =
    "mongodb+srv://PatienceK:@xVJ6PGcQmaTpB5@cluster0.6xrvf.mongodb.net/<bodabanja>?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected…");
  })
    .catch((err) => console.log(err));

    

server.post('/', (req, res) => {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
            } else {
                return res.redirect('/');
            }
        })
    }  
  }) 

  server.listen(PORT, () => {
    console.log("listening on 2001");
  });



