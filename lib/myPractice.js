const checkClickEvent = (elem, fn) => elem.addEventListener('click', fn(elem))

const counter = (elem) => {
    let count = 0
    let elemName = elem.classList[0] || elem.nodeName

    return function() {(count++, console.log(`${elemName} is ${count} times counted!`))}
}

checkClickEvent(document.body, counter)

const putParagraph = (className) => {
    let paragraph = document.createElement('p')
    let parContent = document.createTextNode('FooBarBaz')
    paragraph.appendChild(parContent)
    document.querySelector(className).prepend(paragraph)

    return paragraph
}

const makeLightBlueColor = (elem) => elem.style.color = 'lightblue'

putParagraph('.wrapper')

window.putParagraph = putParagraph
window.makeLightBlueColor = makeLightBlueColor

// TODO(tothricsaj): partial application of this solution
/*
function puElemWithToClassDiv(className, elem, style) {
    elem.style = style
    document.querySelector(className).prepend(elem)
}
*/
// TODO(tothricsaj): event logger system