const checkClickEvent = (elem, fn) => elem.addEventListener('click', fn(elem))

const counter = (elem) => {
    let count = 0
    let elemName = elem.classList[0] || elem.nodeName

    return function() {(count++, console.log(`${elemName} is ${count} times counted!`))}
}

checkClickEvent(document.body, counter)

// TODO(tothricsaj): event logger system