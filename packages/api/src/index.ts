import autoload from '@fastify/autoload'
import compress from '@fastify/compress'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import ratelimit from '@fastify/rate-limit'
import prexit from 'prexit'
import fastify from 'fastify'

// set up fastify
const app = fastify({
  // cloudflare
  trustProxy: 1,
})

// configure CORS
await app.register(cors, {
  origin: '*',
})

// configure headers
await app.register(helmet, {
  contentSecurityPolicy: false,
  dnsPrefetchControl: false,
  permittedCrossDomainPolicies: true,
  noSniff: true,
  strictTransportSecurity: {
    maxAge: 15552000,
    includeSubDomains: true,
  },
})

// configure rate limiting
await app.register(ratelimit, {
  timeWindow: 60 * 1000,
  max: 1000,
})

// configure compression
await app.register(compress)

// autoload api routes
await app.register(autoload, {
  dir: './src/routes',
})

// handle 404
app.setNotFoundHandler(async (request, reply) => {
  app.log.warn(`404: ${request.url}`)
  await reply.code(404).send({
    message: 'Not Found',
    code: 404,
  })
})

// handle errors
app.setErrorHandler(async (err, _, reply) => {
  app.log.error(err)
  const statusCode = err.statusCode ?? 500
  await reply.code(statusCode).send({
    message: 'Something went wrong',
    code: statusCode,
  })
})

prexit(['SIGINT', 'SIGHUP', 'SIGTERM', 'SIGQUIT'], async () => {
  app.log.info('Shutting down...')
  await app.close()
})

// start the server
await app.listen({
  host: 'localhost',
  port: 3333,
})
