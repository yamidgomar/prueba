const express = require('express')
//const router = require('./conponents/messsge/network')
const router = require('./network/routes')
const bodyParser = require('body-parser')
const response = require('./network/response')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//app.use(router)
router(app)

app.listen(3000)
console.log('servidor corriendo en puerto 3000')
