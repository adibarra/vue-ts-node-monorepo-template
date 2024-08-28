import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'

const route: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    await reply.code(501).send({
      message: 'Not Implemented',
      code: 501,
    })
    return reply
  })
}

export default route
