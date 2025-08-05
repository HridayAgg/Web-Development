const express = require("express")
const app = express()
const homeRouter = require("./routes/home.router")
app.use("/",homeRouter)
module.exports = app