const mongoose = require("mongoose")
const connect =()=>{
    mongoose.connect("")
    .then(()=>{
        console.log("Database connected");
        
    })
    .catch((err)=>{
        console.log("ERROR OCCURED IN DATABASE CONNECTION");
        
    })
}
module.exports = connect