const http = require ("http")
let server = http.createServer((req,res)=>{
    if (req.url === "/"){
        if (req.method=="POST"){
            res.end("POST");
            
        }
        else if (req.method=="GET"){
            res.end("GET");
            
        }
    }
    if (req.url === "/about"){
        res.end("About me")
    }
    // res.end("Home routes")
})
let port = 3000
server.listen(port,()=>{
    console.log("Server is running on port:" + port);
    
})