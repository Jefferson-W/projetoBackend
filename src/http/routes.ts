import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { registerCheck } from './controllers/check'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/check', registerCheck)
}