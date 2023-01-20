const express=require("express");
const user=require("../modules/person");
const userroute=express.Router();
userroute.post("/add",async(res,req)=>{
    try{
        const newuser =new user({...req.body})
        const saveuser=await newuser.save();
    }
    catch(error){
console.log(error);
res.send({msg:"fail"});
    }


})
module.exports=userroute    