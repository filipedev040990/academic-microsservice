import { CreateEnrollment } from '../contracts/create-enrollment-usecase'
import { EnrollmentRepository } from '../contracts/enrollment-repository'
import { UuidGenerator } from '../contracts/uuid-generator'

export class CreateEnrollmentUseCase implements CreateEnrollment {
  constructor (
    private readonly repository: EnrollmentRepository,
    private readonly uuidGenerator: UuidGenerator
  ) {}

  async execute (input: CreateEnrollment.Input): Promise<string> {
    return await this.repository.save({
      id: this.uuidGenerator.generate(),
      ...input,
      createdAt: new Date()
    })
  }
}
