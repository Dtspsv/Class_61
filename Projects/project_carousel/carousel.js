const imgs = [
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-1021-22-P8-MVM-Wk1-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-211129-imac-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-220404-bridgestone-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-220404-travel-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-220404-appliance-bundle-en.jpg'
]

const descriptions = [
    'Savings',
    'iMacs',
    'Tires',
    'Travel',
    'Appliances'
]

const data = {
    imgs: imgs,
    descriptions: descriptions,
    index: 0,
    timerID: null,
    arrButtons: []
}

const objs = {
    img: document.querySelector('.carousel img'),
    btnBar: document.querySelector('.carousel .btnBar'),
    navPrev: document.querySelector('.btnNav.prev'),
    navNext: document.querySelector('.btnNav.next')
}

const cbClick = function (evt) {
    let imgid = evt.target.dataset.imgid     // let {imgid} = evt.target.dataset.imgid
    console.log('type of imgid', typeof(imgid))
    imgid = Number(imgid)
    console.log('type of imgid', typeof(imgid))

    objs.img.src = data.imgs[imgid]
}

const timerHandler = function () {
    data.index++
    if (data.index === data.imgs.length) {
        data.index = 0
    }
    update(data.index)
}

const startAnimate = function () {
    data.timerID = setInterval(timerHandler, 3 * 1000)
}

const stopAnimate = function () {
   if (data.timerID) {
    clearInterval(data.timerID)
    data.timerID = null
   }
}

const updatedSelected = function (index) {
    data.arrButtons.forEach(function (ele, inx) {
        ele.className = ''
        if (inx === index) {
            data.arrButtons[index].className = 'btnSelected'
        }
    })
}

const cbMouseEnter = function (evt) {
    stopAnimate()
}

const cbMouseLeave = function (evt) {
    startAnimate()
}

const update = function (index) {
    updatedSelected(index)
    objs.img.src = data.imgs[index]
}
const cbPagePrev = function (evnt) {
    if (data.index > 0) {
        data.index--
        update(data.index)
    }
}

const cbPageNext = function (evnt) {
    if (data.index < data.imgs.length - 1) {
        data.index++
        update(data.index)
    }
}

// create carousel based o the array
const createCarousel = function () {
    objs.img.src = data.imgs[data.index]
    objs.img.addEventListener('mouseenter', cbMouseEnter)
    objs.img.addEventListener('mouseleave', cbMouseLeave)
    objs.navPrev.addEventListener('click', cbPagePrev)
    objs.navNext.addEventListener('click', cbPageNext)

    for (let i = 0; i < imgs.length; i++) {
        let eleBtn = document.createElement('button')
        eleBtn.innerText = data.descriptions[i]
        eleBtn.dataset.imgid = i

        eleBtn.addEventListener('click', cbClick)
        objs.btnBar.appendChild(eleBtn)
        data.arrButtons.push(eleBtn)
        if (i === data.index) {
            updatedSelected(i)
        }
    }
}

createCarousel()
startAnimate()