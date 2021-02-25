const events = {}

const emmiter = {
  on: (eventName, callback) => {
    const cb = events[eventName]
    if (cb) {
      return cb.push(callback)
    }
    events[eventName] = [callback]
  },
  off: (eventName) => {
    if (eventName) {
      delete events[eventName]
    } else {
      events = {}
    }
  },
  emit: (eventName, data) => {
    const callbacks = events[eventName]
    if (callbacks && callbacks.length > 0) {
      callbacks.forEach(callback => {
        callback(data)
      })
    }
  }
}

export default emmiter