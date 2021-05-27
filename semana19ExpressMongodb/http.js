const http =  require('http')


//servidor basico
/*http.createServer(function(req,res){
    console.log('Peticion')
    console.log(req.url)//vamos a traer la url a la que se esta llamando

    //respuesta a la perticion
    res.write('Hola, HTTP nodeJS')


    res.end()
}).listen(8080)*/


http.createServer(rutas).listen(8080)

//crear la rutas
function rutas(req, res){
    console.log('Peticion')

    switch(req.url){
        case '/home':
            res.write('Bievenido')
            res.end()
            break
        default:
            res.write('Error 404')
            res.end()
            break
    }
}