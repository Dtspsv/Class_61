function moveBall(event) {
    let key1 = document.getElementById('eleBall')
    let eleBallPos = key1.getBoundingClientRect()

    switch (event.key) {
        case 'ArrowLeft':
            console.log(key1.style.left = eleBallPos.left - 10 + 'px')
            break
        case 'ArrowUp':
            console.log(key1.style.top = eleBallPos.top - 10 + 'px')
            break
        case 'ArrowRight':
            console.log(key1.style.left = eleBallPos.left + 10 + 'px')
            break
        case 'ArrowDown':
            console.log(key1.style.top = eleBallPos.top + 10 + 'px')
    }
}