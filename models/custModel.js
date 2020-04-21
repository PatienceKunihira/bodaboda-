const mongoose = require("mongoose");

var nameSchema = new mongoose.Schema({
    firstname: String,
    surname : String,
    othername : String,
    phonecontact: String,
    currentdate: String,
    nationality: String,
    nin: String,
    birthday : String,
    maritalstatus : String,
    refree_fname : String,
    refree_sname : String,
    refree_oname : String,
    refree_dob : String,
    refree_work : String,
    vehicle : String,
    stage : String,
    LC1 :String,
    LC3 : String,
    documents : String,
    otherloans : String,
    downpay : String,



});
module.exports= mongoose.model("Customers", nameSchema)