import { CreateQueueConsumed } from '../contracts/create-queue-consumed'
import { QueueRepositoryInterface } from '../contracts/queue-repository'
import { UuidGenerator } from '../contracts/uuid-generator'

export class CreateQueueConsumedUseCase implements CreateQueueConsumed {
  constructor (
    private readonly repository: QueueRepositoryInterface,
    private readonly uuidGenerator: UuidGenerator
  ) {}

  async execute (input: CreateQueueConsumed.Input): Promise<void> {
    await this.repository.save({
      id: this.uuidGenerator.generate(),
      ...input,
      createdAt: new Date()
    })
  }
}
