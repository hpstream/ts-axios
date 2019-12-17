export type Methods = 'get' | 'post'
export interface AxiosRequestConfig {
  url: string
  method: Methods
  data?: any
  params?: any
  headers?: any
}
