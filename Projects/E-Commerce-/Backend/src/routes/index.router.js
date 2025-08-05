const express = require("express")
const productModel = require("../models/product.model")
const router = express.Router()
router.use((req,res,next)=>{
    req.name = "Hri"
    next()  
})
router.get("/",async(req,res)=>{
    // res.send("index");
    let products = await productModel.find() // await - as we need time so that there are products to display else it will throw error when nothing to show
    res.status(200).json({Message:"teacher k",products})


})
module.exports = router