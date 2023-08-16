export type HttpResponse = {
  statusCode: number
  body: any
}

export const error = (statusCode: number, error: unknown): HttpResponse => ({
  statusCode,
  body: error
})
