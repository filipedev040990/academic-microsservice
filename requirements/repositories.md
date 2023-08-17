### enrollments
id: string
identifier: string
name: string
email: string
document: string
birthDate: Date
phoneNumber: string
createdAt: Date

### portal_access
id: string
enrollmentId: string
login: string
password: string
active: boolean
createdAt: Date

### queue_consumed
id: string
queueName: string
messageIdentifier: string
data: string
createdAt: Date

### sent_notifications
id: string
messageIdentifier: string
data: string
createdAt: string