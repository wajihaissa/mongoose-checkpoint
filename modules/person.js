const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const user= new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
})
module.exports =mongoose.model("NewUser",user)