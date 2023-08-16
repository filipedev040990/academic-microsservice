import { UuidGenerator } from '@/application/contracts/uuid-generator'
import crypto from 'crypto'

export class UUIDGenerator implements UuidGenerator {
  generate (): string {
    return crypto.randomUUID()
  }
}
