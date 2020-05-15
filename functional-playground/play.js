import { forEach, forEachObject, unless, every, some, tap, unary } from '../lib/es8-functional.js'

let array = [1,2,3,4]
forEach(array, (data) => console.log(data))
forEach(array, (data) => data++)
console.log(array)

let obj = {a: 1, b: 2}
forEachObject(obj, (k, v) => console.log(`${k}: ${v}`))

forEach([1,2,3,4,5,6,7], (number) => {
    unless(number%2, () => console.log(`${number} is even!`))
})

console.log('/////// every function ///////')

console.log(every([NaN, NaN, NaN], isNaN))
console.log(every(['foo', 'foo', 'fooBAr'], (data) => data==='foo' || data==='fooBar' ? true : false))

console.log('/////// some function ///////')
console.log(some([3, 3, 4], isNaN))
console.log(some([2,1,'foo'], (data) => data==='foo' || data==='fooBar' ? true : false))

console.log('/////// tap function ///////')
tap('fun')((it) => console.log('value is ', it))
console.log('/////// unary function ///////')
console.log(['1','2','3'].map(unary(parseInt)))

