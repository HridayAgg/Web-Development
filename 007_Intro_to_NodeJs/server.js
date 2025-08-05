console.log("Hello server");
const { log } = require("console");
const sum = require("./math")
console.log(sum(10,20));

//file system
const fs = require("fs")
// fs.readFileSync("math.js","utf8",(err,data)=>{
//     if (err){
//         console.log(err);
//         return
//     }
//     else if (data){
//         console.log(data);
//         return
        
//     }
// })
fs.writeFile("eng.txt","hello",(err)=>{
    if(err){
        console.log(err);
        
    }
    console.log("File created!");
    
}
)
fs.appendFile("eng.txt","\nku",(err)=>{
    if (err){
        console.log(error);
        
    }
    else{

        console.log("Appended");
    }
    
})
fs.unlink("eng.txt",(err)=>{
    if (err){
        console.log(error);
        
    }
    else{
        console.log("File deleted");
        
    }
})
fs.mkdirSync("sample",(err)=>{
    if (err){
        console.log(err);
        return
    }
        console.log("Folder Created!");
        
})
fs.readdir("sample","utf8",(err,file)=>{
    if (err){
        console.log(err);
        return
    }
        console.log(file);
        
})
fs.rmdir("sample",{recursive: true ,force:true},(err)=>{
    if (err){
        console.log(err);
        return
    }
        console.log("Folder Deleted!");
})