const express = require('express')
const exphbs = require('express-handlebars')
const cookieParser =  require('cookie-parser')
const bodyParser = require('body-parser')
const router = require('./routes')
const methods = require('./methods')


const app = express()

//soporte para URL-encoded bodies
app.use(bodyParser.urlencoded({extended:true}))

//parse Cookie para la peticion HTTP
app.use(cookieParser())


//inyectamos al usaurio la solicitud leyendo el authToken de las cookies
app.use((req, res, next)=>{
    //obtener aut token de las cookies
    const authToken = req.cookies['AuthToken']

    //inyectar el usuario a la peticion
    req.user = methods.authTokens[authToken];

    next();
})

//definir motor de renderizado
app.engine('hbs', exphbs({
    extname: '.hbs'
}))

app.set('view engine', 'hbs')

//uso del archivo de rutas
app.use('/', router)

app.listen(8080)