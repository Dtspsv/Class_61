// event
// trigger
// when a user clicked a button
// when a mouse moves over an element
// when a key is pressed down

// event is part of HTML
// we use js to control event in html

// event handler
// a block of code that runs when the event fires.


// register event handler statically
// define/register event handler / listener

// 1. create handler

function clickHandler() {
    console.log('clicked...')
}

// 2. create an element in html
// button, a link, img

// 3. register handler in html
// add onclick="clickHandler()"

// 4. add <script> in head

// keyPressedHandler
// 1. create handler
function keyPressedHandler() {
    console.log('pressed key...')
}

// 2. create element

// 3. register the handler

function keyPressedHandler2(event) {
    console.log('pressed key...', event)
}


// register event handler dynamically

// DOM - Document object model
// address book for all elements in html

// 1. create handler
function clickHandler1() {
    console.log('click 111...')
}

// 2. create element in html
// button

// 3. find the element in DOM
// get the element
let eleBtn1 = document.getElementById("button1")

// 4. register listener / handler in js
eleBtn1.addEventListener('click', clickHandler1)

// 5. add a defer in script

// callback function
// invoked by the system, not by you
// no ()


// todo: homework Moving ball part 1
// 1. create a ball element in the center of the screen (in html)
// 2. find ball element in DOM
// 3. create handler: key up/ down/ left/ right ball move
// 4. register the handler in <body> (statically)
// 5. challenge: register the handlers in js (dynamically)

// hint for 3:
// use following to get the position
// let eleBallPos = eleBall.getBoundingClientRect()
// use following to change position
// eleBall.style.left = eleBallPos.left - 100 + "px"


// multiple handlers
function mouseMoveHandler(evt) {
    console.log('mouse entered at ', evt.clientX, evt.clientY)
    console.log(evt.target)
}

eleBtn1.addEventListener('mouseenter', mouseMoveHandler)