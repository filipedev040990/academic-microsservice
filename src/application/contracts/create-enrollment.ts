export interface CreateEnrollment {
  execute: (input: CreateEnrollment.Input) => Promise<CreateEnrollment.Output>
}

export namespace CreateEnrollment {
  export type Input = {
    id: string
    identifier: string
    name: string
    email: string
    document: string
    birthDate: Date
    phoneNumber: string
  }

  export type Output = string
}
