// function: reusable, pre-defined, blocks of codes

// example: printName
// this is a function to print name
function printName() {
    console.log('My name is')
    console.log('This is class 61')
}

// structure of a function
// key word: function
// naming: camelCase () {}
// {code block}
// the above is function definition, is not executed
// Nature of function: memory of address

// call a function (invoke a function)
printName()
// function name, followed by ()

// properties of function
// input parameters
function addition (a, b) {
    console.log(a, b)
    let sum = a + b
    console.log('the sum is', sum)
}

addition(4, 5)

// a, b formal parameter
// 4, 5 actual argument

let res = addition(3, 4, 6)
addition(4)
console.log('res is', res) // res is undefined, because addition does not return anything

addition(3, 4, 6)
addition(4)

// default value
function addition2(a, b = 0) {
    console.log(a, b)
    let sum = a + b
    console.log('the sum is', sum)
    return sum
}

let result = addition2(4)
// addition2(4, 5)
console.log(result)

// return value
// a function may not have a return value
// then it does not return any value




// classwork
// invoice function

// input multiple items
let items = [8300, 360, 700]

// output: total, (plus tax, tax rate is 1.13)

function invoice(arr) {
    let subTotal = 0
    for (let i = 0; i < arr.length; i++) {
        subTotal += arr[i]
    }
    let total = subTotal * 1.13
    return total
}

let cart = [100, 340, 400, 5000, 49]
let res2 = invoice(cart)
console.log(res2)

// todo: homework
// make an invoice function
// input: itemList, taxRate
// output: total after tax

// similar to break in loop
//
function foo() {
    if (isTrue === true) {
        console.log(isTrue)
        return isTrue
    } else {
        return isTrue
    }
}