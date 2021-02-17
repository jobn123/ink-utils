/**
 * concat([1,2,3], [4,5,6], 7, 8)
 * @param {Array} arr 
 */
module.exports = (arr, ...args) => {
  let result = [...arr]

  args.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...item)
    } else {
      result.push(item)
    }
  })

  return result
}