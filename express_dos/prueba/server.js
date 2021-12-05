const express = require('express')
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
