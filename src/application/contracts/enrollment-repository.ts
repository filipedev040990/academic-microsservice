export interface EnrollmentRepository {
  save: (input: EnrollmentRepository.Input) => Promise<EnrollmentRepository.Output>
}

export namespace EnrollmentRepository {
  export type Input = {
    id: string
    identifier: string
    name: string
    email: string
    document: string
    birthDate: Date
    phoneNumber: string
    createdAt: Date
  }

  export type Output = string
}
