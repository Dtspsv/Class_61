// object
// to store various keyed collection and complex properties

// format
// {key: value, key: value}
let car = {
    color: 'red',
    mileage: 100000,
    imported: false,
    tires: ['Michelin', 'Michelin', 'Bridgestone', 'Bridgestone'],
    engine: {
        type: 'V6',
        liters: 3.5,
    },
    funHorn: function (count) {
        console.log('horn!!!', count)
    }

}

console.log(car)
// key
// name of the property
// can not contain space, use '' when must have space

// value
// can be anything, even array, or object or function

// object can be element of array
let cars = [car, car]
// console.log(cars)

// use object and its property
// object.property
// object[property]
console.log(car.color)

car.funHorn(3)


// modify property
car.color = 'blue'

console.log('car', car.color)

// console.log(car)

let car2 = car

car.color = 'yellow'

console.log('car2', car2.color)

