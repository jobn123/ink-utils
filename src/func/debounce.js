// 防抖
// 避免事件频繁触发
// 当上一次事件调用后，延迟规定时间后调用下一次cb
// 只执行最后一次

export function debounce(cb, time) {
  let timerId = null

  return (e) => { 

    if (timerId !== null) {
      clearTimeout(timerId)
    }
    
    timerId = setTimeout(() => {
      cb.call(this, e)
      timerId = null
    }, time)

  }
}