export interface PortalRepository {
  save: (input: PortalRepository.Input) => Promise<void>
}

export namespace PortalRepository {
  export type Input = {
    id: string
    enrollmentId: string
    login: string
    password: string
    active: boolean
  }
}
