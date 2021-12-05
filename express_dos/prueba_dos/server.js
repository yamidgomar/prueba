const express = require('express')
const bodyParser = require('body-parser')
//const router = require('./component/messages/networt')
const router = require('./network/routes')
const app = express()

app.use('/app', express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//app.use(router)
router(app)

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
})

