const e = require('express')
var express = require('express')
var router = express.Router()
const methods = require('./methods')
const User = require('./models/user')

//funcion de middleware sin ruta de montaje
//se ejecutara para cada solicitud del enrutador
router.use(function(req,res, next){
    console.log(Date.now())
    next()
})


//definir las rutas
//index
router.get('/', function(req,res){
    res.render(__dirname+'/views/layouts/index')
})
//login
router.get('/login', function(req,res){
    res.render(__dirname+'/views/layouts/login')
})

router.post('/login', async(req, res)=>{
    //request body
    const {email, password } = req.body
    const hashedPassword = methods.getHashedPassword(password)
  
    //busqueda del usuario en la base de datos
    user = await User.findOne({email:email, password:hashedPassword})
    .then(user=>{
        if(user){
            const authToken = methods.generateAuthToken

            //almacenar el token de autentitcacion
            methods.authTokens[authToken] = user
            //configurar el auth token en las cookies
            res.cookie('AuthToken', authToken)

            //redirigir a home
            res.redirect('/home')
           
        }else{           
            res.render(__dirname+'/views/layouts/login',{
                message: "El nombre o la contraseña no son validos",
                messageClass: 'alert-danger'
            })
        }
    })
})


//home
router.get('/home', function(req,res){
    if (req.user){
        res.render(__dirname+'/views/layouts/home',{
            userName: req.user.fullName
        })
        console.log(req.user)
    }else{
        res.render(__dirname+'/views/layouts/login',{
            message: "Por favor inicie sesion",
            messageClass: 'alert-danger'
        })
    }    
})


//register
router.get('/register', function(req,res){
    res.render(__dirname+'/views/layouts/register')
})

router.post('/register', async(req,res)=>
{
    try{
        //request body
        const {fullname, email, password, confirmPassword } = req.body

        //verificar si el password coincide
        if(password === confirmPassword){
            //evaluar si el registro existe
            user = await User.findOne({email:email})
            .then(user=>{
                if(user){
                    res.render(__dirname+'/views/layouts/register',{
                        message: "El registro ya existe, intente con otra direccion",
                        messageClass: 'alert-danger'
                    })
                }else{
                    //encriptar clave
                    //pasar los datos al modelo y guardar datos
                    const hashedPassword = methods.getHashedPassword(password)
                    const userDB = new User({'fullName': fullname, 'email':email, 'password':hashedPassword})
                    userDB.save()
                    res.render(__dirname+'/views/layouts/login',{
                        message: "El registro se ha completado, iniciar sesion",
                        messageClass: 'alert-success'
                    })
                }
            })
          
        }else{
            res.render(__dirname+'/views/layouts/register',{
                message: "Las claves no coinciden",
                messageClass: 'alert-danger'
            })
        }

    }catch(error){
        console.log('Error', error)
    }   
})


//logout
router.get('/logout',(req,res)=>{
    res.clearCookie('AuthToken')
    return res.redirect('/')
})



module.exports=router