const access_key = 'wuk_oqCiK2-DVGxK78AxVMONHJpa_3v1t2IHQW4GHMs'

document.querySelector('#search').addEventListener('click', () => {
    searchPic()
})

searchPic = () => {
   const searchWord = document.getElementById('input').value
    const urls = `https://api.unsplash.com/search/photos?client_id=${access_key}&page=1&query=${searchWord}`
        fetch(urls)
        .then(response => response.json())
        .then(data => loadImg(data))
            .catch((err) => document.write('<h2>this is error</h2>'))

    loadImg = (data) => {
        let i = data.results.length - 1
        let bgImg = document.getElementById('allPic')
        // let image = document.createElement("div");
        // image.className = "img";
        bgImg.style.backgroundImage = "url("+data.results[i].urls.full + "&w=1366&h=768" +")";
        // document.querySelector("#allPic").appendChild(image);
    }
}

