import { createQueueConsumedLog } from '../factories/create-queue-consumed-usecase'
import { createEnrollment } from '../factories/create-enrollment-usecase'
import { createPortalAccess } from '../factories/create-portal-access-usecase'
import constants from '../constants'
import { startQueue } from '../factories/start-queue'
import { saveSendNotification } from '../factories/save-notification-usecase'

export const handlerPaymentProcessed = async (): Promise<void> => {
  const queueName = constants.QUEUE_PAYMENT_PROCESSED
  const queue = await startQueue()

  await queue.consume(queueName, async (message: any) => {
    const payment = JSON.parse(message.content.toString())
    await createQueueConsumedLog().execute({ queueName, data: JSON.stringify(payment), messageIdentifier: payment.identifier })

    if (payment.status === constants.PAYMENT_STATUS_APPROVED) {
      try {
        const { identifier, name, email, document, birthDate, phoneNumber } = payment.client

        const enrollmentId = await createEnrollment().execute({ identifier, name, email, document, birthDate: new Date(birthDate), phoneNumber })

        await createPortalAccess().execute({ enrollment_id: enrollmentId, login: email, password: document, active: true })

        const message = JSON.stringify({
          subject: constants.PORTAL_ACCESS_DATA_SUBJECT,
          to: email,
          body: `Olá, ${name} tudo bem? Seus dados de acesso ao nosso portal são: <br><br>login: ${email}<br><br>senha: ${document}`
        })

        await saveSendNotification().execute({ messageIdentifier: payment.identifier, data: message })
        await queue.publish(constants.RABBITMQ_EXCHANGE_NOTIFICATION, constants.PORTAL_ACCESS_ROUTING_KEY, message)
      } catch (error) {
        console.log(error)
      }
    }
  })
}
