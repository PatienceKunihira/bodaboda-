const express = require('express')
const router = express.Router();
const Executives = require('../models/useModel')
const Customers = require('../models/custModel')
const passport = require('passport')
const path = require("path");


router.get('/user/adminhome',(req,res)=>{
   
    res.sendFile(path.join(__dirname, "../views","/salesreg.html"))
});

router.post('/user/adminhome', async (req, res) => {
    
    try{
        console.log('rawRequest>', req.body)
        const newExecutive = new Executives(req.body)

        await Executives.register(newExecutive, req.body.password, (err)=>{
			if (err){
                console.error(err);
                res.status(400).send('Not successful')
            }
            else{
                console.log( 'savedRequest>',newExecutive)
                res.status(200).send('Successful')
            }
		})
        
        }catch(error){
            console.log(error)
            res.status(500).send('Server error')
        }
}
)

router.get('/customerhome',(req,res)=>{
   
    res.sendFile(path.join(__dirname, "../views","/customereg.html"))
});

router.post('/customerhome', async (req, res) => {
    
    try{
        console.log('rawRequest>', req.body)
        const newCustomer = new Customers(req.body)

        newCustomer.save(function (err, savedCustomer) {
            if (err){
                console.error(err);
                res.status(400).send('Not successful')
            }
            else{
                console.log( 'savedRequest>',newCustomer)
                res.status(200).send('Successful')
            }
           
          });
        
        }catch(error){
            console.log(error)
            res.status(500).send('Server error')
        }
}
)
router.get('/customerlist',async(req,res)=>{
    if(req.session.user){
        try {
            let items = await Customers.find()
    
            if(req.query.firstname){
                items = await Customers.find({firstname: req.query.firstname})
            }
    
            res.render('list', {users: items})
    
        } catch(error){
            res.status(400).send("unable to find items in the database");
        }
    }
    else{
        res.redirect('/login')
    }
    
});

router.post('/cust',(req,res)=>{
      res.redirect('/user/customerhome')
  });

router.post("/user/customerhome/delete", async (req, res) => {
    //requesting for the session information of the user
    if (req.session.user) {
        try {
            //requesting for the body.. and in thebody pick the id and put it in that variable -id.
        await Customers.deleteOne({ _id: req.body.id })
        res.redirect('back')
        } catch (error) {
        res.status(400).send("unable to delete from database");
        }
    }
    else{
      res.redirect('/login') 
    }
  })
module.exports = router;


