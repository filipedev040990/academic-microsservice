export interface CreatePortalAccess {
  execute: (input: CreatePortalAccess.Input) => Promise<void>
}

export namespace CreatePortalAccess {
  export type Input = {
    enrollment_id: string
    login: string
    password: string
    active: boolean
  }
}
