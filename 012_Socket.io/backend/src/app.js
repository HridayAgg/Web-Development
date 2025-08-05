const express = require("express")
const app = express()
const roomRouter = require("./routes/room.routes")




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",roomRouter)
module.exports = app