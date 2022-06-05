// Make a variable
var name = "Ray Joshua"

// Call a variable
console.log(name)
console.log('Name: ' + name)
console.log('Name:', name)

// Three types of variables
var x = 1
let y = 2
const z = 3

//Data Types
const a = "Ray" // String
const b = 2 // Number
const c = true // Boolean

// Object
const obj = {
    name: "Ray",
    age: 20,
    gender: "Male"
}

// Delete a properties
delete obj.gender

// Calling the properties
console.log(obj)
console.log(obj.name)
console.log(obj['age'])
console.log(`My name is ${obj.name} and my age is ${obj.age}.`)

// Arrays
const arr = ['a', 'b', 'c', 'd', 'e']
const arr2 = [1, 2, 3, 4, 5]

// Indexed Properties

console.log(arr)
console.log(arr[0])
console.log(arr[1])

// Array functions
console.log(arr.toString()) // Converts an array to a string

console.log(arr.join('.')) // Converts an array to a string but returns with a custom separator

arr.push('f') // Add element to array
console.log(arr)

console.log(arr.pop('e')) // Remove the last element from array and returns the element

console.log(arr.concat(arr2)) // Concatenate the array

// Functions

// Create a function
function intro(name) {
    return `My name is ${name}. Nice to meet you!`
}
console.log(intro('Ray'))

// Create a variable function
const intro2 = function(name) {
    return `My name is ${name}. Nice to meet you!`
}
console.log(intro2('Joshua'))

// Arrow Function
const intro3 = (name) => {
    return `My name is ${name}. Nice to meet you!`
}
console.log(intro3('Balingkit'))

// Loop
for (let i = 0; i < arr2.length; i++) {
    console.log(`i: ${i}`)
}

// Conditional Statement
const num1 = 1
const num2 = 5

if (num1 <= num2) {
    console.log(`The first number: ${num1} is less than the second number: ${num2}`)
} else {
    console.log(`Error Occured!`)
}

if (typeof num1 == String) {
    console.log(`${num1} is a String`)
} else {
    console.log(`${num1} is not a String, it is a ${typeof num1}.`)
}

// Switch
const number = 10

switch (number) {
    case 5:
        console.log('Number 5');
        break;
    case 10:
        console.log('Number 10');
        break;
    case 15:
        console.log('Number 15');
        break;
    case 20:
        console.log('Number 20');
        break;
    default:
        console.log('Not even a number');
}

const textInput = document.querySelector('#name')

const SendName = () => {
    alert(`Your name: ${textInput.value} is now in our database.`)
}

const n1 = document.querySelector('#num1')
const n2 = document.querySelector('#num2')
const n3 = document.querySelector('#num3')
const n4 = document.querySelector('#num4')
const totalSum = document.querySelector('#totalSum')
const add = document.querySelector('#add')

// const TotalSum = () => {
//     let sum = 0;
//     sum = Number(n1.value) + Number(n2.value) + Number(n3.value) + Number(n4.value)
//     totalSum.value = sum
// }

add.addEventListener('click', (e) => {
    let sum = 0;
    sum = Number(n1.value) + Number(n2.value) + Number(n3.value) + Number(n4.value)
    totalSum.value = sum
})