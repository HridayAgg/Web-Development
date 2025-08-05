const express = require("express")
const app = express()
module.exports = app

app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    let {Name,Year}=req.query;
    console.log(Name);
    console.log(Year);
    res.send("Data received")
    
})

app.post("/",(req,res)=>{
    // res.send("home post")
    const {name,songs} = req.body;
    console.log(name);
    console.log(songs);
    res.send("Polaris")
})
app.get("/user/:id",(req,res)=>{
    // const { id }=req.params
    const id =req.params.id
    console.log("Id -",id);
    res.json({"message":"id mil gyi","id": id})
    
    res.send ("Saved")
})