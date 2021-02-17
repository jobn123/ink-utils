/**
 * 
 * @param {*} arr 
 * @param {*} cb 
 */
module.exports = (arr, cb) => {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i], i)

    if (res) {
      result.push(res)
    }
  }

  return result
}