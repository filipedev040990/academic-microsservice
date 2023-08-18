import { UuidGenerator } from '../contracts/uuid-generator'
import { SaveNotificationLogUseCase } from './save-notification-log'
import { NotificationRepositoryInterface } from '../contracts/notification-repository'
import { SaveNotificationLog } from '../contracts/save-notification-log-usecase'
import { mock } from 'jest-mock-extended'
import MockDate from 'mockdate'

describe('CreateQueueConsumedUseCase', () => {
  const repository = mock<NotificationRepositoryInterface>()
  const uuidGenerator = mock<UuidGenerator>()

  const sut: SaveNotificationLogUseCase = new SaveNotificationLogUseCase(repository, uuidGenerator)
  const input: SaveNotificationLog.Input = {
    messageIdentifier: 'anyIdentifier',
    data: 'anyData'
  }

  beforeEach(() => {
    uuidGenerator.generate.mockReturnValue('anyUuid')
  })

  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('should call uuidGenerator once', async () => {
    await sut.execute(input)

    expect(uuidGenerator.generate).toHaveBeenCalledTimes(1)
  })

  test('should call NotificationRepositoryInterface once and with correct values', async () => {
    await sut.execute(input)

    expect(repository.save).toHaveBeenCalledTimes(1)
    expect(repository.save).toHaveBeenCalledWith({ id: 'anyUuid', ...input, createdAt: new Date() })
  })
})
