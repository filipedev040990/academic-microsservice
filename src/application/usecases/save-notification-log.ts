import { NotificationRepositoryInterface } from '../contracts/notification-repository'
import { SaveNotificationLog } from '../contracts/save-notification-log-usecase'
import { UuidGenerator } from '../contracts/uuid-generator'

export class SaveNotificationLogUseCase implements SaveNotificationLog {
  constructor (
    private readonly repository: NotificationRepositoryInterface,
    private readonly uuidGenerator: UuidGenerator
  ) {}

  async execute (input: SaveNotificationLog.Input): Promise<void> {
    await this.repository.save({
      id: this.uuidGenerator.generate(),
      ...input,
      createdAt: new Date()
    })
  }
}
