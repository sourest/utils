
export const isString = (value: any) => typeof value === 'string'

export const isNumber = (value: any) => typeof value === 'number'

export const isBoolean = (value: any) => typeof value === 'boolean'

export const isNull = (value: any) =>  value === null

export const isUndefined = (value: any) =>  value === void 0

export const isObject = (value: any) =>  !isNull(value) && typeof value === 'object'

export const isJSONObject = (value: any) => {
  if (isObject(value)) {
    try {
      JSON.stringify(value)
      return true
    } catch (error) {
      return false
    }
  }
  return false
}