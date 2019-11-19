import { isObject, isArray, isUndefined, isNull } from './util'
import { transformRequest } from './data'
function encode(val: string): string {
  // 此处理可以 decodeURI 与 encodeURIComponent，存在兼容性，可以自行处理
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
    .replace(/%3D/gi, '=')
}

export function buildUrl(url: string, params?: any): string {
  let json: string[] = []
  if (!params) {
    return url
  }

  Object.keys(params).forEach(key => {
    let value = params[key]
    if (isNull(value) || isUndefined(value)) {
      return
    }
    if (isArray(value)) {
      key += '[]'
      value.forEach((val: string) => {
        json.push(`${encode(key)}=${encode(val)}`)
      })
      return
    }
    if (isObject(value)) {
      value = transformRequest(value)
    }
    json.push(`${key}=${value}`)
  })
  return (url += (!~url.indexOf('?') ? '?' : '&') + encode(json.join('&')))
}
