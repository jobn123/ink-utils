/**
 * 得到数组的部分元素
 * drop([1,2,3,4], 2) [3, 4]
 * dropRight([1,2,3,4], 2) [1, 2]
 * @param {Array} arr 
 */
export function drop(arr, count=1) {
  if (arr.length === 0 || count >= arr.length) {
    return []
  }

  return arr.filter((item, index) => index >= count)
}

export function dropRight(arr, count=1) {
  if (arr.length === 0 || count >= arr.length) {
    return []
  }

  return arr.filter((item, index) => index < arr.length - count)
}