import { PortalRepository } from '@/application/contracts/portal-repository'
import { prismaClient } from '../prisma-client'

export class PortalAccess implements PortalRepository {
  async save (data: PortalRepository.Input): Promise<void> {
    await prismaClient.portalAccess.create({ data })
  }
}
