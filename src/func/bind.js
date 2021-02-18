const call = require('./call')

module.exports = (Fn, obj, ...args) => {
  return (...args2) => call.call(Fn, obj, ...args, ...args2)
}