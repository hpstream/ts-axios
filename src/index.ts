import { AxiosRequestConfig } from './types/index'
import { buildUrl } from './helpers/url'
import xhr from './xhr'
import { transformRequest } from './helpers/data'
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  handelData(config)
  xhr(config)
}
function processConfig(config: AxiosRequestConfig): void {
  // 处理url
  config.url = handelUrl(config)
  config.data = handelData(config)
  // console.log(config)
}

function handelUrl(config: AxiosRequestConfig): string {
  let { url, params } = config
  console.log(212)
  return buildUrl(url, params)
}

function handelData(config: AxiosRequestConfig): string {
  return transformRequest(config.data)
}
export default axios
