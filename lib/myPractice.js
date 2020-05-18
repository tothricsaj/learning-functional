const checkClickEvent = (elem, fn) => elem.addEventListener('click', fn(elem))

const counter = (elem) => {
    let count = 0

    return function() {(count++, console.log(`${elem.nodeName} is ${count} times counted!`))}
}

checkClickEvent(document.body, counter)
