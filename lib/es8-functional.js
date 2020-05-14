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
    for(let i=0; i<arr.length; i++) {
        result = result && fn(arr[i])
    }
    return result
}