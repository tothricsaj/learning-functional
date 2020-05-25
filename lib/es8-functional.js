export const forEach = (array, fn) => {
    for(let i=0; i<array.length; i++) fn(array[i])
}

export const forEachObject = (obj, fn) => {
    for(var property in obj) {
        if(obj.hasOwnProperty(property)) fn(property, obj[property])
    }
}

export const unless = (predicate, fn) => {
    if(!predicate) fn()
}

export const every = (arr, fn) => {
    let result = true
    for(let value of arr) {
        result = result && fn(value)
    }
    return result
}

export const some = (arr, fn) => {
    let result = false
    for(let value of arr) {
        result = result || fn(value)
    }
    return result
}

export const tap = (value) =>
    (fn) => (
        typeof(fn) === 'function' && fn(value),
        console.log(value)
)

export const unary = (fn) =>
        fn.length === 1
        ? fn
        : (arg) => fn(arg)


export const once = (fn) => {
    let done = false
    return function() {done ? undefined : (done=true, fn.apply(this, arguments))}
}

export const memoize = (fn) => {
    let lookupTable = {}
    return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg))
}

export const map = (array, fn) => {
    let result = []
    for(const val of array) result.push(fn(val))
    return result
}

export const filter = (array, fn) => {
    let result = []
    for(const val of array) (fn(val)) ? result.push(val):undefined
    return result
}

export const concatAll = (array, fn) => {
    let results = []
    for(const value of array) results.push.apply(results, value)
    return results
}

export const reduce = (array, fn, initVal) => {
    let accumlator
    if(initVal !== undefined) accumlator  = initVal
    else accumlator = array[0]

    if(initVal === undefined) 
        for(let i=1; i<array.length; i++) accumlator = fn(accumlator, array[i])
    else
        for(const val of array) accumlator = fn(accumlator, val)
    return [accumlator]
}

export const zip = (leftArr, rightArr, fn) => {
    let index, results = []
    for(index=0;index<Math.min(leftArr.length, rightArr.length); index++) results.push(fn(leftArr[index], rightArr[index]))
    return results
}

export const curryN = (fn) => {
    if(typeof fn !== 'function') throw 'No function provided!'

    return function curriedFn(...args) {
        if(args.length < fn.length) {
            return function() {return curriedFn.apply(null, args.concat([].slice.call(arguments)))}
        }
        return fn.apply(null, args)
    }
}

export const partial = (fn, ...partialArgs) => {
    let args = partialArgs
    return function(...fullArguments) {
        let arg = 0
        for(let i=0; i<args.length && arg < fullArguments.length; i++) {
            if(args[i] === undefined) args[i] = fullArguments[arg++]
            console.log(`arg -> ${arg}`)
        }

        return fn.apply(null, args)
    }
}

export const compose = (a, b) => (c) => a(b(c))

export const composeN = (...fns) =>
  (value) => 
    reduce(fns.reverse(), (acc, fn)=>fn(acc), value)

export const pipe = (...fns) =>
  (value) => 
    reduce(fns, (acc, fn)=>fn(acc), value)