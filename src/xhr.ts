import { AxiosRequestConfig, AxiosResponese, AxiosPromise } from './types/index'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise(resolve => {
    let { url, method = 'get', data, headers = {} } = config

    const req = new XMLHttpRequest()

    req.responseType = 'json'
    req.open(method, url, true)
    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-Type') {
        delete headers[name]
      } else {
        req.setRequestHeader(name, headers[name])
      }
    })
    req.onreadystatechange = function handleLoad() {
      if (req.readyState !== 4) {
        return
      }
      const responseHeaders = req.getAllResponseHeaders()
      const responese: AxiosResponese = {
        status: req.status,
        headers: responseHeaders,
        config,
        data: req.response,
        request: req
      }
      resolve(responese)
    }
    req.send(data)
  })
}
