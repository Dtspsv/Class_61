// 1. create container in html

const eleContainer = document.getElementById('container')

let h1Color = 'green'

function changeColor(num) {
    if (num % 5 === 0) {
        return 'red'
    } else if (num % 4 === 0) {
        return 'green'
    } else if (num % 3 === 0) {
        return 'blue'
    } else if (num % 2 === 0) {
        return 'pink'
    } else {
        return 'black'
    }
}

// use count to record number of clicks
let count = 0
// 2. create element
// create a handler to create element
function createH1() {
    // create element
    let eleH1 = document.createElement('h1')

//append to a parent
    eleContainer.appendChild(eleH1)

    console.log(eleH1)
// 3. add content
    let date = new Date()
    eleH1.innerText = date.getHours() + ':'
        + date.getMinutes() + ':' + date.getSeconds()
        + '.' + date.getMilliseconds()

    // 4. change color
    eleH1.style = 'color: red'

    count++
    // 5. multiple color
eleH1.style = 'color:' + changeColor(count)

    console.log(count)
}


// todo: homework
// redo show time in multi colors

// challenge:
// create container, button in js
// google: how to add id / class when creating element in js

// optional homework: moving ball part 2
// 6. change the color of the ball when space is down
// 7. change the color back when space is up
// 8. move the ball to the clicked position
// 9. register the handlers in js