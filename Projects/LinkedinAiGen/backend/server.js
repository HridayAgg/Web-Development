const app = require("./src/app")
const server = require('http').createServer(app)
const PORT = 3000;
server.listen(PORT,()=>{
    console.log("Server is running....");
    
})