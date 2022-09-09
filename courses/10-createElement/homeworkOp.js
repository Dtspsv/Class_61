let eleBall = document.getElementById('ball')

const moveBall = function (evt) {
    let eleBallPos = eleBall.getBoundingClientRect()
    evt.key === 'ArrowLeft' && (eleBall.style.left = eleBallPos.left - 100 + "px")
    evt.key === 'ArrowRight' && (eleBall.style.left = eleBallPos.left + 100 + "px")
    evt.key === 'ArrowUp' && (eleBall.style.top = eleBallPos.top - 100 + "px")
    evt.key === 'ArrowDown' && (eleBall.style.top = eleBallPos.top + 100 + "px")
}
// console.log(evt.key)
document.addEventListener('keydown', moveBall)

function changeColor(evt) {
    if (evt.code === 'Space') {
    eleBall.style.backgroundColor = 'black'}
}

function changeColorBack (evt) {
    eleBall.style.backgroundColor = 'green'
}
document.addEventListener('keydown', changeColor)
document.addEventListener('keyup', changeColorBack)

function ballPos (moveBall) {
    eleBall.style.left = moveBall.clientX - 35 + 'px'
    eleBall.style.top = moveBall.clientY - 35 + 'px'
}

document.addEventListener('click', ballPos)