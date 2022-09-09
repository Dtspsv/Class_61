// 1. setTimeout (一次性定时器)

function timeOutHandler() {
    console.log('Now is:', new Date().getSeconds())
}

// anonymous function (匿名函数）
// can only be used as a callback function

// setTimeout(timeOutHandler, 3000)

setTimeout(function () {
    console.log('Now is:', new Date().getSeconds())
}, 3000)


// 2. setInterval 间隔定时器

let timerId = null
let intervalId = setInterval(timeOutHandler, 3000)

const btnStop = document.getElementById('stop')
btnStop.addEventListener('click', function () {
    // clearInterval(intervalId)
    clearInterval(timerId)
    console.log(timerId)
})

// 3. create element periodically

const eleContainer = document.getElementById('container')

function createElementPeriodically() {
    // create a 'p' tag in container
    const eleP = document.createElement('p')
    eleP.innerText = 'Hi CY'
    eleContainer.appendChild(eleP)

    // classwork: create a button with text 'Say hi' in container
    const eleBtn = document.createElement('button')
    eleBtn.innerText = 'Hi'
    eleContainer.appendChild(eleBtn)

}

// createElementPeriodically()

// setInterval(createElementPeriodically, 2000)

// vim:
// d/y/c
// diw, dib, di[, diB, di', di"
//dab, da....


// 4. use a button to start the interval
// 4.1 create a button with id start

// 4.2 find the button element / node in DOM
const btnStart = document.getElementById('start')

// 4.3 register handler dynamically
btnStart.addEventListener('click', function () {
    timerId = setInterval(createElementPeriodically, 2000)
    console.log(timerId)
})

// btnStart.addEventListener('click', function () {
//     setInterval(function () {
//         console.log('anonymous function in setInterval')
//             // create a 'p' tag in container
//             const eleP = document.createElement('p')
//             eleP.innerText = 'Hi CY'
//             eleContainer.appendChild(eleP)
//
//             // classwork: create a button with text 'Say hi' in container
//             const eleBtn = document.createElement('button')
//             eleBtn.innerText = 'Hi'
//             eleContainer.appendChild(eleBtn)

//         }, 2000)
// })

// 4.4 wrap handler in callback function

// 5. stop setInterval
// 5.1 let intervalId = setInterval()
// 5.2 clearInterval(intervalId) to stop the interval

// todo: homework
// redo timer
// challenger: click start interval multiple times, and stop all
// js: function hoist
// move all function definition to the start of file automatically
// let: no hoist, declare first, then use