import { AxiosRequestConfig, AxiosPromise } from './types/index'
import { processHeaders } from './helpers/headers'
import { buildUrl } from './helpers/url'
import xhr from './xhr'
import { transformRequest } from './helpers/data'
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  handelData(config)
  return xhr(config)
}
function processConfig(config: AxiosRequestConfig): void {
  // 处理url
  config.url = handelUrl(config)
  config.headers = transformHeaders(config)
  config.data = handelData(config)
}

function handelUrl(config: AxiosRequestConfig): string {
  let { url, params } = config
  return buildUrl(url, params)
}

function handelData(config: AxiosRequestConfig): string {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): Record<string, any> {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
export default axios
