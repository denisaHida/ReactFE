'use strict'
const ase = require('aws-serverless-express')
const app = require('./app')

const server = ase.createServer(app)

exports.handler = (event, context) => {
     ase.proxy(server, event, context)
}
