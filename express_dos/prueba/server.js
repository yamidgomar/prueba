const express = require('express')
<<<<<<< HEAD
const bodyParser = require('body-parser')
const router = express.Router()
const app = express()

app.use(bodyParser.json())
app.use(router)

router.get('/message', (req, res) => {
    console.log(req.headers)
    res.header({
        "header_nuevo":"nuevo header"
    })
    res.send('hola')
})

router.post('/message', (req, res) =>{
    console.log(req.body)
    console.log(req.query)
    res.send('hola desde post')
})
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
})
=======
const bodyParser = require('body-parser') 
//const response = require('./network/response')
//const router = express.Router() 
//const router = require('./components/message/network')
const router = require('./network/routes')
const app = express()
app.use('/app', express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//app.use(router)
router(app)

app.listen(3000)
console.log('servidor corriendo en puerto 3000')
>>>>>>> ba5220f589ff772f1e886f3965a1ad351122b39b
