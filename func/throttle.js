// 节流
// 避免事件频繁触发
// 为时间设置一个时间间隔，只有超过时间间隔事件才触发
// 在规定时间间隔内只能执行一次

module.exports = (cb, wait) => {
  // 定义开始时间
  let start = 0
  return (e) => { 
    // 获取当前时间戳
    let now = Date.now()
    // 判断是否超过间隔时间
    if (now - start >= wait) {
      // 执行函数
      cb.call(this, e)
      // 改变开始时间
      start = now
    }
  }
}