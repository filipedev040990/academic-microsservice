
import { UuidGenerator } from '../contracts/uuid-generator'
import { CreatePortalAccessUseCase } from './create-portal-access'
import { PortalRepository } from '../contracts/portal-repository'
import { CreatePortalAccess } from '../contracts/create-portal-access-usecase'
import { mock } from 'jest-mock-extended'
import { Hasher } from '../contracts/hasher'

describe('CreatePortalAccessUseCase', () => {
  const repository = mock<PortalRepository>()
  const uuidGenerator = mock<UuidGenerator>()
  const hasher = mock<Hasher>()

  const sut: CreatePortalAccess = new CreatePortalAccessUseCase(repository, uuidGenerator, hasher)
  const input: CreatePortalAccess.Input = {
    enrollmentId: 'anyEnrollmentId',
    login: 'anyLogin',
    password: 'anyPassword',
    active: true
  }

  beforeEach(() => {
    uuidGenerator.generate.mockReturnValue('anyUuid')
    hasher.hash.mockResolvedValue('hashedPassword')
  })

  test('should call uuidGenerator once', async () => {
    await sut.execute(input)

    expect(uuidGenerator.generate).toHaveBeenCalledTimes(1)
  })

  test('should call hasher.hash once and with correct password', async () => {
    await sut.execute(input)

    expect(hasher.hash).toHaveBeenCalledTimes(1)
  })

  test('should call EnrollmentRepository once and with correct values', async () => {
    await sut.execute(input)

    expect(repository.save).toHaveBeenCalledTimes(1)
    expect(repository.save).toHaveBeenCalledWith({
      id: 'anyUuid',
      enrollmentId: 'anyEnrollmentId',
      login: 'anyLogin',
      password: 'hashedPassword',
      active: true
    })
  })
})
