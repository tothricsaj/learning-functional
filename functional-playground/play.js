import { forEach, forEachObject, unless } from '../lib/es8-functional.js'

let array = [1,2,3,4]
forEach(array, (data) => console.log(data))
forEach(array, (data) => data++)
console.log(array)

let obj = {a: 1, b: 2}
forEachObject(obj, (k, v) => console.log(`${k}: ${v}`))

forEach([1,2,3,4,5,6,7], (number) => {
    unless(number%2, () => console.log(`${number} is even!`))
})