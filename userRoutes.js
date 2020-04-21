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

router.get('/customers',(req,res)=>{
   
    res.sendFile(path.join(__dirname, "../views","/customereg.html"))
});
router.post('/customers', async (req, res) => {
    
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


module.exports = router;