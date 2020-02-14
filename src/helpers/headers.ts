import { isObject } from './util'
export function processHeaders(headers: any, data: any): any {
  if (isObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}
