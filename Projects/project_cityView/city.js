// 1 get all the relative dom elements to use for rendering
// 2 fetch pictures from backend
// 3 render them
let objs = {
    body: null,
    inputCity: null,
    btnSearch: null,
    carousel: null,
    preUrl: null,
    btnPrev: null,
    btnNext: null,
    page: {
        cursor: 1,
        total: 1
    }
}


const unplashKey = '9OoN44I3llenT3oc5rs3_AnZov2YHjIlBqe1HM98qzY'
const strClassSelected = 'selected'

objs.body = document.querySelector('body')
objs.inputCity = document.querySelector('.searchBar input')
objs.btnSearch = document.querySelector('.searchBar button')
objs.carousel = document.querySelector('.gallary')
objs.btnPrev = document.querySelector('.btnNav.prev')
objs.btnNext = document.querySelector('.btnNav.next')

const cbInput = function (evt) {
    if (evt.key === 'Enter' && objs.inputCity.value.trim().length) {
        fetchData()
    }
}

const setKeyEvent = function () {
    // todo: add more key event here
    objs.body.addEventListener('keyup', function (evt) {
        if (evt.key === 'ArrowLeft') {
            prevPage()
        }
        if (evt.key === 'ArrowRight') {
            nextPage()
        }
    })

    let arrEle = [objs.inputCity, objs.btnPrev, objs.btnNext]
    let evtName = ['keyup', 'click', 'click']
    let arrCB = [cbInput, prevPage, nextPage]
    
    arrEle.forEach(function (ele, index) {
        ele.addEventListener(evtName[index], arrCB[index])
    })


}

const prevPage = function () {
    if (objs.page.cursor > 1) {
        objs.page.cursor--
    }
    fetchData()

}

const nextPage = function () {
    if (objs.page.cursor < objs.page.total) {
        objs.page.cursor++
    }

    fetchData()
}
const fetchData = function () {
    const newCity = objs.inputCity.value.trim().toLowerCase() || 'macbook'
    fetch(`https://api.unsplash.com/search/photos?client_id=${unplashKey}&query=${newCity}&orientation=landscape&page=${objs.page.cursor}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            //todo: renderimage carousel
            console.log('data raw', data)
            renderImages(data.results)
            objs.page.total = data.total_pages

        })

}

const renderImages = function (arrImages) {
    // set background image with new data got
    const img = arrImages[0].urls.full
    objs.body.style.background = `url('${img}') no-repeat center center fixed`

    // create carousel
    createCarousel(arrImages)


}

const updateBackgroundImage = function (url) {
    objs.body.style.background = `url('${url}') no-repeat center center fixed`
}

const setImageSelected = function (eleImage) {
    let images = document.querySelectorAll('[data-index]')
    images.forEach(function (ele) {
        ele.className = ''
    })

    eleImage.className = 'strClassSelected'
}

const createCarousel = function (arrImages) {
    //
    objs.carousel.innerHTML = ''

    for (let i = 0; i < arrImages.length; i++) {
        let item = document.createElement('div')
        if (i === 0) {
        // item.className = 'strClassSelected'
        }

        const img = arrImages[i].urls.regular
        item.style.background = `url('${img}') no-repeat center center fixed`
        item.dataset.index = i
        item.style.animation = 'fadeIn 0.25s forwards'
        item.style.animationDelay = `${0.1 * i}s`

        item.dataset.url = arrImages[i].urls.full
        objs.carousel.appendChild(item)

        item.addEventListener('click', function (evt) {
            updateBackgroundImage(evt.target.dataset.url)
            setImageSelected(evt.target)
            // console.log('evt clicked', evt)
        })

        item.addEventListener('mouseenter', function (evt) {
            let newUrl = evt.target.dataset.url
            // replace the background image temporarily
            if (!objs.preUrl) {
                // find the original url
                // save the current image url before replacement
                let str = objs.body.style.background
                // console.log('str bck', str)
                let iStart = str.indexOf('"');
                let iEnd = str.indexOf('"', iStart + 1);
                str = str.slice(iStart + 1, iEnd)
                objs.preUrl = str
                //
                updateBackgroundImage(newUrl)
            }
        })

        item.addEventListener('mouseleave', function (evt) {
            if (objs.preUrl) {
                updateBackgroundImage(objs.preUrl)
                objs.preUrl = null
            }
        })
    }
}


fetchData()
setKeyEvent()
objs.btnSearch.addEventListener('click', fetchData)