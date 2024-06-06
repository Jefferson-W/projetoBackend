import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
import { PrismaUsersRepository } from '@/repositories/prisma-users-repository'


interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
  cpf: string
  endereco: string
  numero: string
  bairro: string
  cidade: string
  estado: string
  checkIns: string
}

export async function registerUseCase({
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

}: RegisterUseCaseRequest) {
  const password_hash = await hash(password, 6)

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userWithSameEmail) {
    throw new Error('E-mail already exists.')
  }

  const prismaUsersRepository = new PrismaUsersRepository()

  await prismaUsersRepository.create({
    name,
    email,
    password_hash,
    cpf,
    endereco,
    numero,
    bairro,
    cidade,
    estado,
    checkIns: {
      create:{
        chamado: checkIns
      }
    }

  })
}