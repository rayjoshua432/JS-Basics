// Create an array
const arr = ['a', 'b', 'c', 'd', 'e']
console.log(arr)

// Get array value by index
console.log(arr[0])

// Array Functions


// Push - add element to array in last position
arr.push('f')
console.log(arr)

// Unshift - add element to array in first position
arr.unshift('g')
console.log(arr)

// Pop - remove element from array in last position
arr.pop()
console.log(arr)

// Shift - remove element from array in first position
arr.shift()
console.log(arr)

// Join - combine elements from array and return a string
console.log(arr.join('----'))

// Array Destructure
const [one, two, three] = arr
console.log(one)
console.log(two)
console.log(three)

// Spread Operator
const arr2 = [...arr]
console.log(arr2)

// Loops

// For Each Loop
arr.forEach((element, index) => {
    console.log(`Element ${index}: ${element}`)
})

console.log(' ')


// For Loop

for (let i = 0; i < arr.length; i++) {
    console.log(`Element #${i}: ${arr[i]}`)
}

console.log(' ')

// For In
for (let i in arr) {
    console.log(`Element #${i}: ${arr[i]}`)
}

console.log(' ')

// For of
let index = 0

for (let element of arr) {
    console.log(`Element #${index}: ${element}`)
    index++
}