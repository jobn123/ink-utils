// 返回一个计算后的新数组

export function map(arr, cb) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i))
  }

  return result
}