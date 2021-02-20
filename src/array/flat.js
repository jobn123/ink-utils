/**
 * 数组扁平化，将多维数据转换为一位数组
 * flat([1,2,[3,4,5,[6, 7]]])
 * @param {*} arr 
 */

export function flat(flatarr) {
  const result = []

  const flat = () => {
    flatarr.forEach(item => {
      if (Array.isArray(item)) {
        result = result.concat(flat(item))
      } else {
        result = result.concat(item)
      }
    });
  }

  return flat(arr)
}

// function flat2 (arr) {
//   let result = [...arr]

//   while(arr.some((item) => Array.isArray(item))) {
//     result = result.concat(...result)
//   }

//   return result
// }