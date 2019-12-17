import { AxiosRequestConfig } from './types/index'
export default function xhr(config: AxiosRequestConfig): void {
  let { url, method = 'get', data, headers } = config

  const req = new XMLHttpRequest()
  req.open(method, url, true)
  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-Type') {
      delete headers[name]
    } else {
      req.setRequestHeader(name, headers[name])
    }
  })
  req.send(JSON.stringify(data))
}
