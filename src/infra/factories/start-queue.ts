import { Queue } from '@/application/contracts/queue'
import { RabbitmqAdapter } from '../adapters/rabbitmq'
import constants from '../constants'

export const startQueue = async (): Promise<Queue> => {
  const queue = new RabbitmqAdapter(constants.RABBITMQ_URI)
  await queue.start()
  return queue
}
