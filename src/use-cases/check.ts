import { PrismaCheckRepository } from '@/repositories/prisma-check-repository'


interface RegisterCheckCaseRequest {
    chamado: string
    abertura_chamado: Date
    inicio_atendimento: Date
    fim_atendimento: Date
    km_inicio: string
    km_fim: string
    contrato: string
    garantia: string
    tipo: string
    user: string
}

export async function registerCheckCase({
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
}: RegisterCheckCaseRequest) {

    const prismaCheckRepository = new PrismaCheckRepository()

    await prismaCheckRepository.create({
        chamado,
        abertura_chamado,
        inicio_atendimento,
        fim_atendimento,
        km_inicio,
        km_fim,
        contrato,
        garantia,
        tipo,
        usuario: {
            connect: {
                id: user
            }
        }
    })
}