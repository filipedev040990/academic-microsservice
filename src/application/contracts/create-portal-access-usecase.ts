export interface CreatePortalAccess {
  execute: (input: CreatePortalAccess.Input) => Promise<void>
}

export namespace CreatePortalAccess {
  export type Input = {
    enrollmentId: string
    login: string
    password: string
    active: boolean
  }
}
