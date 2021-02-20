import { call } from './call'

export function bind(Fn, obj, ...args) {
  return (...args2) => call.call(Fn, obj, ...args, ...args2)
}