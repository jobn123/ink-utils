// 返回一个计算后的新数组

/**
 * 
 * @param {*} arr 
 * @param {*} cb 
 * @param {*} initVal 
 */
export function reduce (arr, cb, initVal) {
  let result = initVal

  for (let i = 0; i < arr.length; i++) {
    result = (cb(result, arr[i]))
  }

  return result
}