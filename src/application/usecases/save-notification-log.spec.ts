import { UuidGenerator } from '../contracts/uuid-generator'
import { SaveNotificationLogUseCase } from './save-notification-log'
import { NotificationRepository } from '../contracts/notification-repository'
import { mock } from 'jest-mock-extended'
import { SaveNotificationLog } from '../contracts/save-notification-log-usecase'

describe('CreateQueueConsumedUseCase', () => {
  const repository = mock<NotificationRepository>()
  const uuidGenerator = mock<UuidGenerator>()

  const sut: SaveNotificationLogUseCase = new SaveNotificationLogUseCase(repository, uuidGenerator)
  const input: SaveNotificationLog.Input = {
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

  test('should call NotificationRepository once and with correct values', async () => {
    await sut.execute(input)

    expect(repository.save).toHaveBeenCalledTimes(1)
    expect(repository.save).toHaveBeenCalledWith({ id: 'anyUuid', ...input, createdAt: new Date() })
  })
})
