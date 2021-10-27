exports.sucess = (req, res, message, status) => {
    res.status(status || 200).send({
        error: "",
        body:message})
} 

exports.error = (req, res, status) => {
    res.status(501).send({
        "error":error,
        "message":""
    }) 
} 
