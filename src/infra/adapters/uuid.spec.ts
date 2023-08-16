import { UuidGenerator } from '@/application/contracts/uuid-generator'
import { UUIDGenerator } from './uuid'
import crypto from 'crypto'

jest.mock('crypto', () => ({ randomUUID: jest.fn().mockReturnValue('anyUUID') }))

describe('UuidGenerator', () => {
  const sut: UuidGenerator = new UUIDGenerator()

  test('should call ramdomUUID once', () => {
    sut.generate()
    expect(crypto.randomUUID).toHaveBeenCalledTimes(1)
  })

  test('should return an uuid', () => {
    const uuid = sut.generate()

    expect(uuid).toBe('anyUUID')
  })
})
