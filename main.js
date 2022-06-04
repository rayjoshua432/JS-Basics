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

// Indexed Properties

console.log(arr)
console.log(arr[0])
console.log(arr[1])

// Array functions
console.log(arr.toString()) // Converts an array to a string

console.log(arr.join('.')) // Converts an array to a string but returns with a custom separator


arr.push('f') // Add element to array
console.log(arr)

arr.pop('e') //