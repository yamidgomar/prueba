rutas es igual a red. ejm: component => message => network.js

La capa de red va ha ser la encargada de recibir la solicitud http y
prosesar toda la informacion y enviarla al controlador.

### server.js

```javascript
const express = require('express')
const router = require('./conponents/messsge/network')
const bodyParser = require('body-parser')
const response = require('./network/response')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

app.listen(3000)
console.log('servidor corriendo en puerto 3000')

    component/message/network

const express = require('express')
const router = express.Router()
const response = require('../../network/response')

router.get('/message', (req, res) =>{
    console.log(req.headers)
    res.header({
        "My-headers":"nuevo header",
        "Otro-headers":"un header mas"
    })
    response.sucess(req, res, 'hola desde get')
})

router.post('/message', (req, res) => {
    console.log(JSON.stringify(req.body))
    console.log(req.query)
    response.sucess(req, res, 'hola desde post')
})

module.exports = router

```
------------------------

para hacer que la app cresca... ¿si mañana tengo otro componente como importo dos veces el router?

tendremos toda la informacion del router en un solo archivo.

```
//nuevo archivo : network/routes.js

const express = require('express')
const message = require('../conponents/messsge/network')

const routes = (server) => {
    server.use('/message', message)
}

module.exports = routes

// server.js

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
```
## Controladores:Definiendo la logica de negocio:

Ya tenemos la capa de red separada, debemos hacer la parte logica o controlador.
Dentro de la carpeta conponents/messsge/ creamos un archivo controller.js

``` javascript
function addMessage(user, message){
    //console.log(user)
    //console.log(message)
    const fullMessage = {
        user:user,
        message:message,
        date: new Date()
    }

    console.log(fullMessage)
}

module.exports = {
    addMessage,
};

// component/messsge/network

const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', (req, res) =>{
    console.log(req.headers)
    res.header({
        "My-headers":"nuevo header",
        "Otro-headers":"un header mas"
    })
    response.sucess(req, res, 'hola desde get')
})

router.post('/', (req, res) => {
    //console.log(JSON.stringify(req.body))
    controller.addMessage(req.body.user, req.body.message)
    //console.log(req.query)
    response.sucess(req, res, 'hola desde post', 201)
})

module.exports = router
```
--------------------------

¿que pasa cuando viene el usuario?
¿como le digo a mi network, que algo a salido bien o a salido mal?

Lo qje vamos a hacer es trabajar con promesas:

