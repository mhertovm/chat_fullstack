const express = require('express');
const app = express();
const port = 5000;
const http = require('http').Server(app);
const cors = require('cors');
const { log } = require('console');
const socketIo = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
})

app.use(cors());
app.get('', (req, res)=> {
    res.json({
        message: "Hello"
    })
});
const users = [];
socketIo.on('connection', (socket)=>{
    log(`${socket.id} user connetcted`);
    socket.on('message', (data)=> {
        socketIo.emit('response', data);
    });
    socket.on('newUser', (data)=> {
        users.push(data);
        socketIo.emit('responseNewUser', users)
    })
    socket.on('disconnect', ()=>{
        log(`${socket.id} user disconnected`)
    })
})

http.listen(port, ()=>{
    log(`server working `+ port)
})