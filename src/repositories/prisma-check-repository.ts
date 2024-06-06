import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class PrismaCheckRepository {
  async create(data: Prisma.CheckInCreateInput) {
    const user = await prisma.checkIn.create({
      data,
    })

    return user
  }
}