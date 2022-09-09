// // todo: homework
// // print scores backwards, using while loop
let testScores = [85, 76, 92, 59]
let i = testScores.length - 1
while (i >= 0) {
    console.log(testScores[i])
    i--
}

// todo: homework
// make an invoice function
// input: itemList, taxRate
// output: total after tax

function invTotal(itemList, taxRate) {

    switch (taxRate) {
        case 'ON':
            taxRate = 1.13
            break
        case 'BC':
            taxRate = 1.12
            break
        case 'MB':
            taxRate = 1.15
    }

    let subTotal = 0
    for (let i = 0; i < itemList.length; i++) {
        subTotal += itemList[i]
    }
    let total = subTotal * taxRate
    return total
}

let itemList = [300, 400, 500]
console.log((invTotal(itemList, 'ON')).toFixed(2), 'total in ON')
console.log((invTotal(itemList, 'BC')).toFixed(2), 'total in BC')
console.log((invTotal(itemList, 'MB')).toFixed(2), 'total in MB')