exports.sucess = (req, res, message, status) => {
    res.status(status || 201).send({
        "error":"",
        "mensaje":message
    })
}

exports.error = (req,res,message, details, status) => {
    console.log(details)
    res.status(status || 500).send({
        "error":message,
        "mensaje":""
    })
} 
