import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { registerCheck } from './controllers/check'
import { prisma } from '@/lib/prisma'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/check', registerCheck)

  app.get('/allUsers', async () => {

    const users = await prisma.user.findMany()

    return { users }

  })

  app.get('/allChecks', async () => {

    const checks = await prisma.checkIn.findMany()

    return { checks }
  })
}