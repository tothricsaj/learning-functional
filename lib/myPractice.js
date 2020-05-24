const checkClickEvent = (elem, fn) => elem.addEventListener('click', fn(elem))

const counter = (elem) => {
    let count = 0
    let elemName = elem.classList[0] || elem.nodeName

    return function() {(count++, console.log(`${elemName} is ${count} times counted!`))}
}

checkClickEvent(document.body, counter)

// TODO(tothricsaj): partial application of this solution
/*
function puElemWithToClassDiv(className, elem, style) {
    elem.style = style
    document.querySelector(className).prepend(elem)
}
*/
// TODO(tothricsaj): event logger system