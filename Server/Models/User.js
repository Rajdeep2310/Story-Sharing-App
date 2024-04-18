const mongoose = require("mongoose");

userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        required: true,
        type:String, 
    }

},{timestamps:true})

const User = mongoose.model("User", userSchema);
module.exports = User; 