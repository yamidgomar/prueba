exports.sucess = (req, res, message, status) => {
    res.status(status || 200).send({
        "error":"",
        "mensaje":message
    })
}

exports.error = (req, res, message, status) => {

}
