// array
let arrayA = ['book', 1, true, null]
let books = ['js', 'css', 'fishing']
console.log(arrayA[0], books[1])

let scores = [85, 76, 92, 59]

// nested array
let scores1 = [1, 2, 3, scores, 6, 7]
console.log(scores1)

// index in array, start from 0
console.log(scores1[3][1])

// array.length
console.log(scores.length)
console.log(scores[scores.length - 1])
// the maximum index is always length - 1

// Modify array
// array.push
scores.push(99)
console.log(scores)
console.log(scores.push(100))
console.log(scores)

// Modify one element in array
scores[3] = 61
console.log(scores)

// array iteration
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i])
}


