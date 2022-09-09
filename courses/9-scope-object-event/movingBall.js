// todo: homework Moving ball part 1
// 1. create a ball element in the center of the screen (in html)


// 2. find ball element in DOM
const eleBall = document.getElementById('ball')

// 3. create handler: key up/ down/ left/ right ball move

// function f() {} same as const moveBall
const moveBall = function (evt) {
    // use following to get the position
    let eleBallPos = eleBall.getBoundingClientRect()
    console.log(eleBallPos)
    console.log(evt.key)
    // evt.key === 'ArrowLeft' && (eleBall.style.left = eleBallPos.left - 100 + "px")
// right, up, down
}

document.addEventListener('keydown', moveBall)

// 4. register the handler in <body> (statically)
// 5. challenge: register the handlers in js (dynamically)

// hint for 3:
// use following to get the position
// let eleBallPos = eleBall.getBoundingClientRect()
// use following to change position
// eleBall.style.left = eleBallPos.left - 100 + "px"