const bind = require('./func/bind')

// 
function add(a, b) {
  console.log(a + b + this.c)
  return a + b + this.c
}

let obj = {
  c: 3
}

globalThis.c = 100

// let fn = bind(add, obj, 1, 2)
// console.log(fn())

let fn = bind(add, obj)
console.log(fn(1, 2))