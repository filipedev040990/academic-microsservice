import { QueueRepositoryInterface } from '@/application/contracts/queue-repository'
import { prismaClient } from '../prisma-client'

export class QueueRepository implements QueueRepositoryInterface {
  async save (input: QueueRepositoryInterface.Input): Promise<void> {
    await prismaClient.queueConsumed.create({
      data: {
        id: input.id,
        queueName: input.queueName,
        data: input.data,
        messageIdentifier: input.messageIdentifier,
        createdAt: input.createdAt
      }
    })
  }
}
