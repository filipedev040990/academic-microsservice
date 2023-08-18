export interface QueueRepositoryInterface {
  save: (input: QueueRepositoryInterface.Input) => Promise<void>
}

export namespace QueueRepositoryInterface {
  export type Input = {
    id: string
    queueName: string
    messageIdentifier: string
    data: string
    createdAt: Date
  }
}
