import { NotificationRepositoryInterface } from '@/application/contracts/notification-repository'
import { prismaClient } from '../prisma-client'

export class NotificationLogRepository implements NotificationRepositoryInterface {
  async save (data: NotificationRepositoryInterface.Input): Promise<void> {
    await prismaClient.sendNotification.create({ data })
  }
}
