export function clone(target) {
  if (target !== null && typeof target === 'object') {
    if ( target instanceof Array) {
      return [...target]
    } else {
      return {...target}
    }
  }
  return target
}

export function deepClone(target, map=new Map()) {
  if (target !== null && typeof target === 'object') {
    // 从缓存容器中读取克隆对象
    let cloneTarget = map.get(target)
    // 如果存在, 返回前面缓存的克隆对象
    if (cloneTarget) {
      return cloneTarget
    }
    // 创建克隆对象(可能是{}或者[])  
    cloneTarget = target instanceof Array ? [] : {}
    // 缓存到map中
    map.set(target, cloneTarget)

    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        // 递归调用, 深度克隆对象, 且传入缓存容器map
        cloneTarget[key] = deepClone(target[key], map)
      }
    }
    return cloneTarget
  }

  return target
}