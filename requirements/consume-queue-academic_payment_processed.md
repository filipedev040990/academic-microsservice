## Consumir fila academic_payment_processed

> ## Caso de sucesso

1. ⛔ Consome a fila academic_payment_processed
2. ⛔ Se o pagamento foi confirmado:
  1. ⛔ Aciona os UseCases CreateEnrollment, CreatePortalAccess
  2. ⛔ Publica na fila send_notification com os dados de acesso ao portal


> ## Casos de exceção

1. ⛔ Lança  erro se qualquer campo obrigatorio não for fornecido

✅
⛔

### Objeto Enrollment
{
  "id": "cf77d757-6229-42ef-bc5a-78747d887790",
  "identifier": "LQVJV5-1688666800410",
  "name": "Zé das Couves",
  "email": "tayana@email.com",
  "document": "12365487987897",
  "birthDate": "1990-01-01T00:00:00.000Z",
  "phoneNumber": "3295521026"
}

### Objeto PortalAccess
{
  "id": string
  "enrollmentId": string
  "login": string
  "password": string
  "active": boolean
}