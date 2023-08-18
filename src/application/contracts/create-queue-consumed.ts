export interface CreateQueueConsumed {
  execute: (input: CreateQueueConsumed.Input) => Promise<void>
}

export namespace CreateQueueConsumed {
  export type Input = {
    queueName: string
    messageIdentifier: string
    data: string
  }
}
