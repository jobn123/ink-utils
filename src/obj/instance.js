export function newInstance(fn, ...args) {
  const obj = {}

  obj.__proto__ = fn.prototype
  const result = fn.call(obj, ...args)
  // 如果Fn返回的是一个对象类型, 那返回的就不再是obj, 而是Fn返回的对象
  // 否则返回obj
  return result instanceof Object ? result : obj
}