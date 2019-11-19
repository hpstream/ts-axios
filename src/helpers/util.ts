const toString = Object.prototype.toString

export function isDate(val: any): boolean {
  return getType(val) === 'date'
}

export function isObject(val: any): boolean {
  return getType(val) === 'object'
}
export function isArray(val: any): boolean {
  return getType(val) === 'array'
}
export function isUndefined(val: any): boolean {
  return getType(val) === 'undefined'
}
export function isNull(val: any): boolean {
  return getType(val) === 'null'
}

export function getType(val: any): string {
  let match = toString
    .call(val)
    .toLowerCase()
    .match(/\s(\S+?)\]/) as Array<string>
  return match[1]
}
