export interface SaveNotificationLog {
  execute: (input: SaveNotificationLog.Input) => Promise<void>
}

export namespace SaveNotificationLog {
  export type Input = {
    messageIdentifier: string
    data: string
  }
}
