import { CreateQueueConsumedUseCase } from '@/application/usecases/create-queue-consumed'
import { QueueRepository } from '../database/repositories/queue'
import { UUIDGenerator } from '../adapters/uuid'

export const createQueueConsumedLog = (): CreateQueueConsumedUseCase => {
  const repository = new QueueRepository()
  const uuidGenerator = new UUIDGenerator()
  return new CreateQueueConsumedUseCase(repository, uuidGenerator)
}
