export const forEach = (array, fn) => {
    for(let i=0; i<array.length; i++) fn(array[i])
}

export const forEachObject = (obj, fn) => {
    for(var property in obj) {
        if(obj.hasOwnProperty(property)) fn(property, obj[property])
    }
}

export const unless = (predicate, fn) => {if(!predicate) fn()}