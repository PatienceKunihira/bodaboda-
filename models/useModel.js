const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


var registerSchema = new mongoose.Schema({
    fname : String,
    surname : String,
    currentdate : String,
    phonecontact : String,
    birthday : String,
    IDs : String,
    email: String,
    password: String,
    workingdays : String,
    supervisors : String,
    role: {type:String, required:'Please enter a role'}

});
registerSchema.plugin(passportLocalMongoose,{usernameField:'password'})
module.exports= mongoose.model("Executives", registerSchema)

