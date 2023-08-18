import { CreatePortalAccessUseCase } from '@/application/usecases/create-portal-access'
import { PortalAccess } from '../database/repositories/portal-access'
import { UUIDGenerator } from '../adapters/uuid'
import { BcryptAdapter } from '../adapters/bcrypt'

export const createPortalAccess = (): CreatePortalAccessUseCase => {
  const repository = new PortalAccess()
  const uuidGenerator = new UUIDGenerator()
  const salt = 12
  const hasher = new BcryptAdapter(salt)
  return new CreatePortalAccessUseCase(repository, uuidGenerator, hasher)
}
