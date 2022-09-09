// 1. variable

// 1.1 variable is an address in memory
// 1.2 definition: contain two steps: declare, assign
// declare: street number for the address, only do once
// assign: let something to stay in that address, multiple times


let fullStackClass
let name = 'Jason' //string
let age = 23 //number
let isGirl = false //boolean


name = 'Cynthia'
age = 'Cindy'
console.log(name, age, isGirl)
console.log(fullStackClass)

// = assign, space around "="
name = 'Xinhan' //` (backtick, backquote)

// 1.3 const
const pie = 3.1415926

// pie = 3.14

// 2. primitive data type
// 2.1 string, number, boolean, undefined
// 2.2 combination data type: array, object

// let (try your best to use let)
// var (2015)
var classNumber = 61
console.log(classNumber)

let a
let b = null
console.log('type of a is:', typeof a, '; type of b is:', typeof b)

// 3. expression
// 3.1 math
let score = 1
score = score + 2
console.log(score)
// score += 2 same as score = score + 2
score -= 2
console.log(score)

// 3.2 order of operation
score = 3 * (2-(score - 3 / 2))
console.log(score)

// 3.3 remainder operator (modulo operator)
score = 5
let r = score % 2
console.log(r)

// 3.4 auto increment, decrement
score = score + 1
score += 1
score++ // it's an equation, not an expression
// not same as score + 1

let newScore1 = 2
let newScore2 = 2
console.log('newScore1++ is;', newScore1++) // use the variable first, then add
console.log('newScore1 is;', newScore1) // use the variable first, then add
console.log('++newscore2 is:', ++newScore2) // add 1 first, then use the variable
console.log('newscore2 is:', newScore2) // add 1 first, then use the variable

// 3.4 comparison, result of comparison is a boolean, true or false
score = 4
let s1 = score > 5
console.log(s1)

/*
* <
* >
* <=
* >=
* !=
* !==
* ==
* ===
* */

// 3.5 === vs == (old)
let s2 = 1 == '1'
console.log(s2)

let s3 = 1 === '1'
console.log(s3)

// 3.6 ternary operator
let scoreOne = 59
scoreOne = 65
let res = scoreOne >= 60 ? 'Passed' : 'Failed'
console.log(res)



b = 6
a = b > b++ ? ++b : b-- // (b--) equal b = b - 1
console.log(a, b)

a = 7
b = 6
let c = a > b-- ? a-- : b++
console.log(a,b,c)

b = 6
a = b <= b++ ? ++b : b--
console.log(a,b)