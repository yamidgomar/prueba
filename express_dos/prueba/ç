const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()

app.use(bodyParser.json())
app.use(router)

router.get('/message', (req, res) => {
    console.log(req.headers)
    res.header({
        "Mi_nuevo":"_Header",
        "Otro": "_Header"
    })
    res.status(200).send('<h1>Hola desde get</h1>')
})

router.post('/message', (req, res) => {
    console.log(req.body)
    res.send('<h1>Hola desde post</h1>')
})

app.listen(3000)

console.log('servidor corriendo en puerto 3000')
