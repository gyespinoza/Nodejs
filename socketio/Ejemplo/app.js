var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)


app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
})


var users=0

io.on('connection', function(socket){
    console.log('Usuario conectado: ' + socket.id)

    users++
    io.sockets.emit('broadcast', {
        des: users + ' usuarios conectados!'
    })

    //enviar mensaje despues de 5 segundos
    setTimeout(function(){
        socket.send('Estes es un mensaje despues de 5 minutos iniciada la conexion')
    }, 5000);


    //recibiendo datos del cliente
    socket.on('clientEvent', function(data){
        console.log('Mensaje del usuario:' + data)
    })

    socket.on('disconnect', function(){
        console.log('El usuario se ha desconectado')
        users--
        io.sockets.emit('broadcast',{
            des: users + ' usuarios conectados!'
        })
    })

})

http.listen(8080, function(){
    console.log('Listening on: 8080')
})