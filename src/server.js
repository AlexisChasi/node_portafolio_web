const express = require('express')
const path = require('path');

// Inicializaciones
const app = express()

// Configuraciones 
app.set('port',process.env.port || 3000) // toma el puerto donde se despliega la app o sino en el puerto determinado 3000
app.set('views',path.join(__dirname, 'views'))

// Middlewares 
app.use(express.urlencoded({extended:false}))


// Variables globales

// Rutas 
app.get('/',(req,res)=>{
    res.send("Server ok!")
})

// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))


module.exports = app

