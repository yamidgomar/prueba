const express = require('express')
const message = require('../conponents/messsge/network')

const routes = (server) => {
    server.use('/message', message)
}

module.exports = routes
