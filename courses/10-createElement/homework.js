const btn1 = document.createElement('button')
btn1.setAttribute('id', 'btn')
btn1.innerText = 'Click Me'
document.body.appendChild(btn1)
document.addEventListener('click', createH1)

const eleContainer = document.createElement('div')
eleContainer.setAttribute('id', 'container')
// eleContainer.innerText = 'Now, You can see me'
document.body.appendChild(eleContainer)

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

let count = 0

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