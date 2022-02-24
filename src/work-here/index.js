import Fastify from 'fastify'

function buildServer() {
    const fastify = Fastify()

    fastify.register(import('./routes/users.js'))

    fastify.log.info('Fastify is starting up!')

    return fastify
}

export default buildServer
    