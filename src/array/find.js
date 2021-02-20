/**
 * 
 * @param {Array} arr 
 * @param {Function} cb 
 */
export function find(arr, cb) {

  for (let i = 0; i < arr.length; i++) {
    let res = cb(arr[i], i)

    if (res) {
      return arr[i]
    }
  }

  return undefined
}