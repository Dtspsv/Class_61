// ES2015 new features

// 1. string interpolation
let name = 'CY'
// console.log(name)
// console.log('the teacher\'s name is : ' + name)
// console.log("the teacher's name is : " + name)

let date = new Date()
// console.log(date.getHours() + ':' +  date.getMinutes() + ':' + date.getSeconds())
// console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

// back tick / back quote `
// console.log(`the teacher's name is : ${name}`)
//http://dmitripavlutin.com/string-interpolation-in-javascript/

// 2. spread operator
let studentNames = ['Cynthia', 'Yunfei']
let studentNames1 = studentNames

// 2.1 assign in array,or object, does not copy
console.log(studentNames1)
studentNames[0] = 'Kaiwen'
console.log(studentNames1)

// 2.2 spread operator makes a copy
let studentNames2 = [...studentNames]

console.log(studentNames2)
studentNames[0] = 'Kelly'
console.log(studentNames2)
console.log(studentNames)

// 2.3 add new elements or properties
let studentNames3 = ['Junkai', ...studentNames, 'Zhifang', 'Xinhan']
console.log(studentNames3)

let car = {
    name: 'ford',
    year: '2013'
}

let car1 = {...car, mileage: 10000}
console.log(car1)

// 2.4 update existing properties and add new property
// when updating existing properties, make sure to spread first
// then update
let car2 = {...car1, year: '2019', color: 'red'}
// let car2 = {year: '2019', ...car1, color: 'red'}
console.log(car2)

let doubleCar = {...car, ...car1}
console.log('--->', doubleCar)

// 3 Arrow function =>
// the following three are same functions
function myFun(a, b) {
    console.log('something')
    return a + b
}

const myFun1 = function (a, b) {
    console.log('something')
    return a + b
}

const myArrowFun = (a, b) => {
    console.log('something')
    return a + b
}

myFun(2, 3)
// same way to invoke / call an arrow function
myArrowFun(2, 3)

// features:
// 3.1 only one input parameter, () can be omitted
const myArrowFun1 = a => {
    console.log(`the input is ${a}`)
}

myArrowFun1('class')

// 3.2 one expression in return, {} can be omitted
const addition = (a, b) => a + b
const square = a => a ** 2
// 看见箭头，左右摇头，左边是参数，右边是函数体

function returnObj(a, b) {
    return {[a]: b}
}

// classwork: rewrite the returnObj as an arrow function
const returnObj1 = (a, b) => ({[a]: b})


console.log(returnObj1('name', 'CY'))

let result = returnObj1('class', '61')
console.log(result)


// 4. Destruction: object, and array 解构
let phone = {brand: 'Apple', price: '1000', color: 'black'}
// old way:
// let price = phone.price
// new way:
let {price} = phone
let {color} = phone

console.log(price, color)

let arr = [1, 2, 3, 4, 5, 6, 7, 0]
let[a, b, ...rest] = arr
console.log(a, b, rest)

// 5. Object property value shorthand

let brand = 'cherry'
let count = 104

// old way:
// let keyboard = {
//     brand: brand,
//     count: count
// }

// new way:
// when the key and variable passed-in are the same words
let keyboard = {
    brand,
    count
}

console.log(keyboard)

// 6. array method

let imgArr = ['url1', 'url2', 'url3', 'url4']

imgArr.length
// add element at the end
imgArr.push('url5')
// remove the last element
imgArr.pop()

// add element at the start
// remove element at the start

// 6.1 foreach loop
imgArr.forEach((img, index)  => {
    console.log(img, index)
})

// 6.2 map
// http://url1
let newImgArr = imgArr.map((element) => `http://${element}`)
console.log(newImgArr)

// 6.3 reduce
let sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 3)
console.log(sum )
//                          c
arr = [1, 2, 3, 4, 5, 6, 7]
let product = arr.reduce((pre, cur) => pre * cur)
console.log(product)
// p = 28


// 6.4 filter
let even = arr.filter((ele) => ele % 2 === 0)
console.log(even)

// todo: homework
// study array method:
// forEach, map, filter, reduce
// find, findIndex, sort