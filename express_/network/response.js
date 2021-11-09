/*exports.sucess = (req, res, message, status) => {
    res.status(status || 200).send({
        error: "",
        body:message})
} 

exports.error = (req, res, status) => {
    res.status(501).send({
        "error":error,
        "message":""
    }) 
}*/ 

exports.sucess = (req, res, message, status) => {
    res.status(status || 200).send({
        "error":"",
        "mensaje":message
    })
} 

exports.error = (req, res, message, details) => {
    console.log(details)
    res.status(501).send({
        "error":message,
        "mensaje":""
    })
}
