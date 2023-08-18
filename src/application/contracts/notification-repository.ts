export interface NotificationRepository {
  save: (input: NotificationRepository.Input) => Promise<void>
}

export namespace NotificationRepository {
  export type Input = {
    id: string
    messageIdentifier: string
    data: string
    createdAt: Date
  }
}
