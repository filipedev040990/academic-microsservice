import { QueueRepositoryInterface } from '@/application/contracts/queue-repository'
import { prismaClient } from '../prisma-client'

export class QueueRepository implements QueueRepositoryInterface {
  async save (data: QueueRepositoryInterface.Input): Promise<void> {
    await prismaClient.queueConsumed.create({ data })
  }
}
