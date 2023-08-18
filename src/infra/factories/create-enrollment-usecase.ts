import { CreateEnrollmentUseCase } from '@/application/usecases/create-enrollment'
import { Enrollment } from '../database/repositories/enrollment'
import { UUIDGenerator } from '../adapters/uuid'

export const createEnrollment = (): CreateEnrollmentUseCase => {
  const repository = new Enrollment()
  const uuidGenerator = new UUIDGenerator()
  return new CreateEnrollmentUseCase(repository, uuidGenerator)
}
