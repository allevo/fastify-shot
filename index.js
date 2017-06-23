'use strict'

const fp = require('fastify-plugin')
const shot = require('shot')

function fastifyShot (fastify, options, next) {
  fastify
    .decorate('inject', injectFunction)

  next()

  function injectFunction (opts, cb) {
    shot.inject(fastify, opts, cb)
  }
}

module.exports = fp(fastifyShot)
