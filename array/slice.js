/**
 * 数组切片
 * @param {*} arr 
 */
module.exports = (arr, start, end) => {
  // let result = []

  // for (let i = start; i < end; i++) {
  //   result.push(arr[i])
  // }

  // return result

  if (arr.length === 0) {
    return []
  }

  begin = begin || 0
  end = end || arr.length

  if (start >= arr.length) {
    return []
  }

  if (end < start) {
    end = arr.length
  }

  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (i >= start && i < end) {
      result.push(arr[i])
    }
  }

  return result
}