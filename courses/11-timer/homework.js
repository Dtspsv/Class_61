// let timerId = null

const eleContainer = document.getElementById('container')
function createElementPeriodically() {
    const eleP = document.createElement('p')
    eleP.innerText = 'Hi CY'
    eleContainer.appendChild(eleP)

    const eleBtn = document.createElement('button')
    eleBtn.innerText = 'Hi'
    eleContainer.appendChild(eleBtn)
}

const btnStart = document.getElementById('start')
btnStart.addEventListener('click', function () {
   timerId = setInterval(createElementPeriodically, 2000)
    console.log(timerId)
})

    const btnStop = document.getElementById('stop')
    btnStop.addEventListener('click', function () {
        while (timerId > 0) {
            console.log('hello' + timerId)
            clearInterval(timerId)
            console.log(timerId)
            timerId--;
        }

    })