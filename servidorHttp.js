/*const http = require('http');

const onRequest = (req, res) => {
    const {method, headers, url} = req
    res.writeHead(200, {
        'Content-Type':'aplication/json', 
        'X-Powered-By':'YAGO'
    })

    console.log(headers)
    console.log(method)
    console.log(url)
    
    let body = []
    req.on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        console.log(body)
    })
    
    res.write(`<h1>Titulo principal</h1>`)
    res.end()

}
const server = http.createServer(onRequest)

server.listen(8080)
console.log(`servidor funcionando en puerto 8080`)
*/

var http = require('http')

var obj = JSON.stringify([
    {
        "autor":"Emilio", 
        "fecha":new Date(), 
        "numero de hojas":"200"
    },{
        "autor":"yago",
        "fecha":"09/09/2021", 
        "numero de hojas":"500"

    }
])

var obj2 = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta charset="UTF-8">
    <title>mi pagina</title>
    <link rel='stylesheet' href=''>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            box-sizing:border-box;
        }
    </style>
</head>
<body>
   <h1>Titulo de mi pagina</h1>
   <form action="/my-handling-form-page" method="post">
    <ul>
      <li>
          <label for="name">Nombre:</label>
        <input type="text" id="name" name="user_name">
      </li>
      <li>
        <label for="mail">Correo electrónico:</label>
        <input type="email" id="mail" name="user_mail">
      </li>
      <li>
        <label for="msg">Mensaje:</label>
        <textarea id="msg" name="user_message"></textarea>
      </li>
     </ul>
     <li class="button">
       <button type="submit">Envíe su mensaje</button>
       </li>
    </form>
</body>
</html>
`

var onRequest = (req, res) => {
    const {method, url, headers} = req
    console.log(method)
    console.log(url)
    let body = []
/*    req.on("data", (chunk) => {
        body.push(chunk)
    }).on("end",() => {
        body = Buffer.concat(body).toString()
        console.log(body)
    } )*/
    req.setEncoding('utf8')
    var dataPost = ''
    req.addListener('data', function(chunk){
        dataPost += chunk
    })

    req.addListener('end', function(){
        console.log(dataPost)
    })
    res.writeHead(
        200, 
        {'Content-Type':'text/html', 'Otro':'uno mas'}
    )
    res.write(obj2)
    res.end()
}
var server = http.createServer(onRequest)

server.listen(8080)
