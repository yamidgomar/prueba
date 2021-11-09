const express = require('express')
const message = require('../components/message/network')

const routes = function(server, message){
    server.use('/message', message)
}

module.exports = routes
