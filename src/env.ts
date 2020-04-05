
const UA: string = navigator.userAgent

const isInUA = (value: string) => (new RegExp(value, 'i')).test(UA)

export const isIOS = (): boolean => isInUA('(iPhone)|(iPad)|(iPod)')

export const isIPhone = (): boolean => isInUA('iPhone')

export const isIPad = (): boolean => isInUA('iPad')

export const isIPod = (): boolean => isInUA('iPod')

export const isAndroid = (): boolean => isInUA('Android')

export const isWeChat = (): boolean => isInUA('MicroMessenger')