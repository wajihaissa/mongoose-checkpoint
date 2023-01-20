const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log("data base connected");
}
catch(error){
    console.log("data base not connected");

}
};
module.exports=connectDB
