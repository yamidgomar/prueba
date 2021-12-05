const express = require('express')
const message = require('../component/messages/networt')

const routes = (server) => {
    server.use('/message', message)
} 

module.exports = routes

