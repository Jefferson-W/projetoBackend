import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { registerUseCase } from '@/use-cases/register'

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        cpf: z.string(),
        endereco: z.string(),
        numero: z.string(),
        bairro: z.string(),
        cidade: z.string(),
        estado: z.string(),
        checkIns: z.string(),
    })

    const {
        name,
        email,
        password,
        cpf,
        endereco,
        numero,
        bairro,
        cidade,
        estado,
        checkIns
    } = registerBodySchema.parse(request.body)

    try {
        await registerUseCase({
            name,
            email,
            password,
            cpf,
            endereco,
            numero,
            bairro,
            cidade,
            estado,
            checkIns
        })
    } catch (err) {
        return reply.status(409).send(err)
    }

    return reply.status(201).send()
}