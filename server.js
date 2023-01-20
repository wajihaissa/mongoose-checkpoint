const express=require("express");
const connectDB=require("./config/connectDB");
const app=express()
connectDB();
app.use("/user",require("./routs/usercrudes"))
app.listen(5000,(err)=>{
    err?console.log(err):console.log("server is running");   
})