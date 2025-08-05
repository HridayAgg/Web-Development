const app = require("./src/app")
const connect = require("./src/db/db")
const http = require("http")
const socket = require("socket.io")
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});
io.on('connection', socket => {
    const rooomId = socket.handshake.query.rooomId;
    socket.join(rooomId);

    console.log('New client connected');

    socket.on("message", msg => {
        console.log(msg);
        socket.emit('message', msg);
    });
});

const PORT = 3000

server.listen(PORT,()=>{
    console.log("Server is running...");
    
})