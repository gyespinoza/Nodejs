const express = require('express')
const app = express()



const server = app.listen(3000, function(){
    console.log('Server running on port 3000')
})
const io = require('socket.io')(server,{
    cors:{
        origin:"*"
    }
})


io.on('connection', function(socket){
    console.log("Se ha conectado el usuario: " + socket.id)

    //enviar mensajes
    socket.on('sendMessage', function(data){
        io.emit('message', data)
    })

    socket.on("typing", (data)=>{
        //io.emit("typing", data)
        socket.broadcast.emit("typing", data)
    })

    socket.on("stopTyping", ()=>{
        //io.emit("stopTyping")
        socket.broadcast.emit("stopTyping")
    })

    socket.on("disconnect", function(){
        console.log("El usuario: " +  socket.id + " se ha desconectado")
    })
})