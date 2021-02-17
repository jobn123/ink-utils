/**
 * 有一个满足条件返回true
 * @param {*} arr 
 * @param {*} cb 
 */
module.exports = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      return true
    }
  }
  return false
}