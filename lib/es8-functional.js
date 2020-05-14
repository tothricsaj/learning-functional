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