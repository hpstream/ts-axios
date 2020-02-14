export type Methods = 'get' | 'post'
export interface AxiosRequestConfig {
  url: string
  method: Methods
  data?: any
  params?: Record<string, any>
  headers?: any
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponese {
  status: number
  data: any
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponese> {}
