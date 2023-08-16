import { CreateEnrollment } from '../contracts/create-enrollment-usecase'
import { EnrollmentRepository } from '../contracts/enrollment-repository'
import { UuidGenerator } from '../contracts/uuid-generator'
import { CreateEnrollmentUseCase } from './create-enrollment'
import { mock } from 'jest-mock-extended'

describe('CreateEnrollmentUseCase', () => {
  const repository = mock<EnrollmentRepository>()
  const uuidGenerator = mock<UuidGenerator>()

  const sut: CreateEnrollment = new CreateEnrollmentUseCase(repository, uuidGenerator)
  const input: CreateEnrollment.Input = {
    identifier: 'LQVJV5-1688666800410',
    name: 'Zé das Couves',
    email: 'tayana@email.com',
    document: '12365487987897',
    birthDate: new Date(),
    phoneNumber: '3295521026'
  }

  beforeEach(() => {
    uuidGenerator.generate.mockReturnValue('anyUuid')
    repository.save.mockResolvedValue('anyEnrollmentId')
  })

  test('should call uuidGenerator once', async () => {
    await sut.execute(input)

    expect(uuidGenerator.generate).toHaveBeenCalledTimes(1)
  })

  test('should call EnrollmentRepository once and with correct values', async () => {
    await sut.execute(input)

    expect(repository.save).toHaveBeenCalledTimes(1)
    expect(repository.save).toHaveBeenCalledWith({ id: 'anyUuid', ...input })
  })

  test('should return an enrollmentId on success', async () => {
    const enrollmentId = await sut.execute(input)

    expect(enrollmentId).toBe('anyEnrollmentId')
  })
})
