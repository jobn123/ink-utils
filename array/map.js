// 返回一个计算后的新数组

module.exports = (arr, cb) => {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i))
  }

  return result
}