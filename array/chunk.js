/**
 * 数组分块
 * chunk([1,2,3,4,5,6,7,8,9], 3) [[1,2,3], [4,5,6], [7,8,9]]
 * @param {Array} arr 
 */
module.exports = (arr, size=1) => {
  let result = []
  let temp = []

  arr.forEach((item) => {
    if (temp.length === 0) {
      result.push(temp)
    }

    temp.push(item)

    if (temp.length === size) {
      temp = []
    }
  })

  return result
}