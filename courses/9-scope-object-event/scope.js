// scope
// before 2015
// global scope
// global variable can be accessed anywhere
let name = 'cy'
var age = 30

function testGlobalScope() {
    console.log(name)
    console.log(age)
}

// testGlobalScope()

// function scope
// variable defined inside the function can not be accessed from outside the function

function testFunctionScope() {
    let name2 = 'cqye'
    var age2 = 25
    const name3 = 'dtspsv'
}

// testFunctionScope()

// console.log(name2, age2, name3)

// post 2015
// block scope
// variable declared inside a {} block cannot be accessed from outside the block

for (let i = 0; i  < 5; i++) {
    console.log(i)
}

for (let i = 10; i > 0; i--) {
    console.log(i)
}

// let i = 0
// while (i < 6 ) {
//
// }



// var vs let
// let: does not pollute the block scope

for (var i = 0; i < 7; i++) {
    console.log(i)
}

console.log('outside loop', i)

// let: need to explicitly declare

let name7 = 'yang'

console.log(name7)

// let: declare first, then use

// let: can not re-declare

