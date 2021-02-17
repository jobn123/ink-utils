/**
 * 每个元素都通过条件返回true否则false
 * @param {*} arr 
 * @param {*} cb 
 */
module.exports = (arr, cb) => {

  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i)) {
      return false
    }
  }

  return true
}