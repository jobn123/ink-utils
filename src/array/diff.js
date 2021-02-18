/**
 * 数组差集
 * diff([1,2,3], [3,4,5]) [1,2]
 * @param {Array} arr 
 */
module.exports = (arr, arr2=[]) => {
  if (arr.length === 0) {
    return []
  }

  if (arr2.length === 0) {
    return arr.slice()
  }
  
  return arr.filter((item) => !arr2.includes(item))
}