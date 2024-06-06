import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { registerCheckCase } from '@/use-cases/check'

export async function registerCheck(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        chamado: z.string(),
        abertura_chamado: z.coerce.date(),
        inicio_atendimento: z.coerce.date(),
        fim_atendimento: z.coerce.date(),
        km_inicio: z.string(),
        km_fim: z.string(),
        contrato: z.string(),
        garantia: z.string(),
        tipo: z.string(),
        user: z.string(),
    })

    const {
        chamado,
        abertura_chamado,
        inicio_atendimento,
        fim_atendimento,
        km_fim,
        km_inicio,
        contrato,
        garantia,
        tipo,
        user
    } = registerBodySchema.parse(request.body)

    try {
        await registerCheckCase({
            chamado,
            abertura_chamado,
            inicio_atendimento,
            fim_atendimento,
            km_inicio,
            km_fim,
            contrato,
            garantia,
            tipo,
            user
        })
    } catch (err) {
        return reply.status(409).send(err)
    }

    return reply.status(201).send()
}