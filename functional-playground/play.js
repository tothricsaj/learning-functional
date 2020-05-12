import forEach from '../lib/es8-functional.js'

let array = [1,2,3,4]
forEach(array, (data) => console.log(data))
forEach(array, (data) => data++)
console.log(array)