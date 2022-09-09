// logic operation
// and &&
// both true, result is true
let age = 7
let gender = 'female'
let findRes1 = age >= 70 && gender === 'female'

// or ||
// either is true, result is true
let findRes2 = age >= 70 || gender === 'female'
console.log(findRes1, findRes2)

// not !
let a = true
let b = !a
console.log(b)

a = 'hello'
b = !a
let c = !b
c = !!a
console.log('a is', !!a)

a = 0
let d
console.log('d is', d, 'type of d is', !!d)

// falsy values / truthy value
// A falsy value is something which evaluates to FALSE
// for instance when checking a variable

// Only 6 falsy values in js

// false
// undefined
// null
// 0
// empty string ''
// NaN

a = '25'
b = parseInt(a)
console.log(a, typeof a, b, typeof b)

a = 'Michael'
b = parseInt(a)
console.log(a, typeof a, b, typeof b)


// logic control
// if  else
let score = 97
let res = score >= 60 ? 'passed' : 'failed'
console.log(res)

score >= 60 ? console.log('passed') : console.log('failed')

if (score >= 60) {
    console.log('passed')
} else {
    console.log('failed')
}

if (score >= 90) {
    console.log('Excellent')
} else if (score >= 60) {
    console.log('passed')
} else {
    console.log('failed')
}


// && expression
a = 0
console.log(!!a)

if (a) {
    console.log('print true')
}

a && console.log('print true 1')

// isLoading && <Loading/>

// switch case

let fruit = 'pear'
switch (fruit) {
    case 'orange':
        console.log('this is orange')
        break
    case 'apple':
        console.log('this is apple')
        break
    case 'banana':
        console.log('this is banana')
        break
    case 'cherry':
        console.log('this is cherry')
        break
    case 'peach':
        console.log('this is peach')
        break
    default:
        console.log('no such fruit')
}

console.log('it is the end of switch')


a = 6
b = 5
c = a-- <= ++b && a++ < --b
console.log(a, b, c)

a = 6
b = 5
c = a-- <= ++b || a++ < --b
console.log(a, b, c)