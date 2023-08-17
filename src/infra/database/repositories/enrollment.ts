import { EnrollmentRepository } from '@/application/contracts/enrollment-repository'
import { prismaClient } from '../prisma-client'

export class Enrollment implements EnrollmentRepository {
  async save (data: EnrollmentRepository.Input): Promise<string> {
    const enrollment = await prismaClient.enrollment.create({ data })
    return enrollment.id
  }
}
