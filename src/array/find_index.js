/**
 * 
 * @param {Array} arr 
 * @param {Function} cb 
 */
module.exports = (arr, cb) => {

  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i], i)

    if (res) {
      return i
    }
  }

  return -1
}