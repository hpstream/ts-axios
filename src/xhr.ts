import { AxiosRequestConfig } from './types/index'
export default function xhr(config: AxiosRequestConfig): void {
  let { url, method = 'get', params, data, headers } = config

  const req = new XMLHttpRequest()
  if (method !== 'get') {
    params = data
  }
  req.open(method, url, true)
  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      req.setRequestHeader(name, headers[name])
    }
  })
  req.send(JSON.stringify(params))
}
