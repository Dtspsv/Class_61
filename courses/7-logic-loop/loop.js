// for loop

for (let i = 0; i < 5; i++) {
    console.log(i)
}
console.log('end of loop')
// i = 0 variable initialization
// i < 5 loop condition for executing the code block
// i++ variable increment/decrement
// {code block}

for (let i = 10; i > 0; i--) {
    console.log(i)
}

for (let i = 10; i >= 0; i = i - 2) {
    console.log(i)
}

for (let i = 0; i <= 10; i++) {
    i % 2 === 0 && console.log(i)
}

for (let i = 10; i >= 0; i = i - 2) {
    if (i % 4 === 0) {
        console.log(i,'It is multiple of 4')
    } else {
        console.log(i)
    }
}


// i increment can be put in the code block
for (let i = 0; i <= 10; i++) {
    if ( i % 2 === 0) {
        console.log('even number', i)
    } else {
        continue
        console.log('odd number', i)
    }
}

console.log('end of code')

// while loop
let j = 0
while (j < 10) {
    console.log('while loop', j)
    j++
    break
}

// break: exit from a loop (both for loop and while loop) or a switch-case

// continue
// (skip) move the control to the next iteration of the loop
// use continue in while loop; must be after the increment