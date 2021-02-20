/**
 * 数组去重
 * @param {*} arr 
 */
export function unique (arr) {
  // let result = []

  // arr.forEach(item => {
  //   if (result.indexOf(item) === -1) {
  //     result.push(item)
  //   }
  // })

  let set = new Set(arr)
  return [...set]
}
