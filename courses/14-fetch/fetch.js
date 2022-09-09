// 1. get data from cloud
// protocols http
// http is a protocol for fetching
// resources such as html doc / img ...
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

// 2. API: Application program interface
// 2.1 pre 2015 http request
// xml, pure text file, tags, outdated

// 2.2 post 2015 Fetch Api
// return a promise (response to the request)


// fetch: a js internal function

// let result = fetch('https://jsonplaceholder.typicode.ca/users')
// let result = fetch('https://jsonplaceholder.typicode.com/user')
let result = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log('line 19, data is ready', data))
    .catch((err) => console.log('this is error', err))
    .finally(() => console.log('game over'))


console.log('line 21, result', result)

// the json() method takes a response and reads it to a json type
// and return a promise


// 3. sync, async

// 3.1 synchronous
// |-------A-------|
//                 |---------B------|
// very important task
// using resource exclusively, waiting, jam
// high cost, like place order, make payment in amazon
//


// 3.2 asynchronous
// 837 10 big mac
// the direct result is a receipt
// 838 1 coffee
// |-----A-----------|
//          |----B--|
// sharing resource, no jam
// the process is not certain who's first
// due to uncertainty of time consumption
// a signal is needed to inform when request is fulfilled

// 3.3 mix of sync and async
// async is ES2015 task implement mechanism


// 4. promise
// a promise has various status:
// 4.1 pending: initial state, neither fulfilled nor rejected

// 4.2 fulfilled: the operation was completed successfully
// .then is the signal of your response

// 4.3 rejected: operation failed
// 404 is not a rejected response. 404 is a normal response

// 5 catch error
// .catch
// when error is caught, it is not an error anymore

// 6. finally
// to tell you your request is done


const access_key = 'wuk_oqCiK2-DVGxK78AxVMONHJpa_3v1t2IHQW4GHMs'
let searchWord = 'beijing'
let res = fetch(`https://api.unsplash.com/search/photos?client_id=${access_key}&page=1&query=${searchWord}`)
    .then(response => response.json())
    .then(data => console.log('unsplash data', data.results))

// todo: homework
// use async method to search a picture
// use this picture as the background for a webpage

// challenge:
// add an input in your webpage
// add a button
// click the button, pass the word to the api for searching
