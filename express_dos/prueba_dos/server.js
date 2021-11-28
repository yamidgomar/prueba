const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(router)

router.get('/message', (req, res) =>{
    console.log(req.headers)
    res.send('hola desde get')
})

router.post('/message', (req, res) =>{
    console.log(req.body)
    console.log(req.query)
    res.header({
        "nuevo-header":"header-nuevo", 
        "otro-header":"mas header"
    })
    
    res.send('hola desde post')
})


app.listen(3000)
console.log('servidor listo en puerto 3000')
