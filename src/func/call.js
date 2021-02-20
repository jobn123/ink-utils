export function call(Fn, obj, ...args) {
  // 如果obj为null,undefined 指向全局
  if (obj === undefined || obj === null) {
    obj = globalThis
  }
  // 创建临时方法
  obj.temp = Fn
  // 调用temp方法
  let result = obj.temp(...args)
  // 删除临时方法
  delete obj.temp
  // 返回结果
  return result
}