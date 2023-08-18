import { UuidGenerator } from '../contracts/uuid-generator'
import { CreateQueueConsumedUseCase } from './create-queue-consumed'
import { QueueRepositoryInterface } from '../contracts/queue-repository'
import { CreateQueueConsumed } from '../contracts/create-queue-consumed'
import { mock } from 'jest-mock-extended'

describe('CreateQueueConsumedUseCase', () => {
  const repository = mock<QueueRepositoryInterface>()
  const uuidGenerator = mock<UuidGenerator>()

  const sut: CreateQueueConsumed = new CreateQueueConsumedUseCase(repository, uuidGenerator)
  const input: CreateQueueConsumed.Input = {
    queueName: 'anyName',
    messageIdentifier: 'anyIdentifier',
    data: 'anyData'
  }

  beforeEach(() => {
    uuidGenerator.generate.mockReturnValue('anyUuid')
  })

  test('should call uuidGenerator once', async () => {
    await sut.execute(input)

    expect(uuidGenerator.generate).toHaveBeenCalledTimes(1)
  })

  test('should call QueueRepository once and with correct values', async () => {
    await sut.execute(input)

    expect(repository.save).toHaveBeenCalledTimes(1)
    expect(repository.save).toHaveBeenCalledWith({ id: 'anyUuid', ...input, createdAt: new Date() })
  })
})
