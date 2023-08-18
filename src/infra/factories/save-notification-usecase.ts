import { SaveNotificationLogUseCase } from '@/application/usecases/save-notification-log'
import { NotificationLogRepository } from '../database/repositories/notification-log'
import { UUIDGenerator } from '../adapters/uuid'

export const saveSendNotification = (): SaveNotificationLogUseCase => {
  const repository = new NotificationLogRepository()
  const uuidGenerator = new UUIDGenerator()
  return new SaveNotificationLogUseCase(repository, uuidGenerator)
}
