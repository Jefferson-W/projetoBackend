import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { register } from './controllers/register'
import { registerCheck } from './controllers/check'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'


export async function appRoutes(app: FastifyInstance) {

  app.get('/', async (req: FastifyRequest, res: FastifyReply) => {
    res.status(200).send({
      status: 200,
      message: "Welcome to API",
    })
  })

  app.post('/users', register)

  app.post('/check', registerCheck)

  app.get('/allUsers', async () => {

    const users = await prisma.user.findMany()

    return { users }

  })

  app.get('/allUsersChecks', async () => {

    const users = await prisma.checkIn.findMany({
      include: { user: true }
    })
    return { users }
  })

  app.get('/allChecks', async () => {

    const checks = await prisma.checkIn.findMany()

    return { checks }
  })

  app.delete('/users/id', async (req: FastifyRequest, res: FastifyReply) => {

    const deleteSchema = z.object({
      id: z.string()
    })

    const { id } = deleteSchema.parse(req.body)
    console.log(id)
    await prisma.user.delete({
      where: {
        id: id
      },
    })

    res.status(200)
  })

  app.delete('/checkin/deleteAll', async (req: FastifyRequest, res: FastifyReply) => {

    await prisma.checkIn.deleteMany()
    res.status(200)
  })

  app.delete('/users/deleteAll', async (req: FastifyRequest, res: FastifyReply) => {

    await prisma.user.deleteMany()
    res.status(200)
  })

  app.delete('/checkin/id', async (req: FastifyRequest, res: FastifyReply) => {

    const deleteSchema = z.object({
      id: z.string()
    })

    const { id } = deleteSchema.parse(req.body)
    await prisma.checkIn.delete({
      where: {
        id: id
      },
    })

    res.status(201)
  })


}