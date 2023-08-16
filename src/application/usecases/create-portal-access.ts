import { CreatePortalAccess } from '../contracts/create-portal-access-usecase'
import { Hasher } from '../contracts/hasher'
import { PortalRepository } from '../contracts/portal-repository'
import { UuidGenerator } from '../contracts/uuid-generator'

export class CreatePortalAccessUseCase implements CreatePortalAccess {
  constructor (
    private readonly repository: PortalRepository,
    private readonly uuidGenerator: UuidGenerator,
    private readonly hasher: Hasher
  ) {}

  async execute (input: CreatePortalAccess.Input): Promise<void> {
    await this.repository.save({
      id: this.uuidGenerator.generate(),
      enrollmentId: input.enrollmentId,
      login: input.login,
      password: this.hasher.generate(input.password),
      active: true
    })
  }
}
