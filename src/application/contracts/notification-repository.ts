export interface NotificationRepositoryInterface {
  save: (input: NotificationRepositoryInterface.Input) => Promise<void>
}

export namespace NotificationRepositoryInterface {
  export type Input = {
    id: string
    messageIdentifier: string
    data: string
    createdAt: Date
  }
}
