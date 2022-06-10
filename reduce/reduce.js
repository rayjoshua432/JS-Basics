// Find Function (params = value, index)

// Array
const arr = ['a', 'b', 'c', 'd', 'e']

// Array Object
const arrObj = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
]

// Bracket Notation
console.log(arrObj[0])

// Dot Notation
console.log(arrObj[2].number)

console.log(arr.find(el => el == 'a'))
console.log(arrObj.find(obj => obj.number == 2))

// Filter Function (params = value, index)
console.log(arr.filter(el => el == 'a'))
console.log(arr.filter((el, index) => index == 4))

console.log(arrObj.filter(obj => {
    console.log(`Object: `, obj)
}))

// Map Function
console.log(arr.map(el => {
    return el
}))

console.log(arr.map(el => {
    if (el == 'd') {
        return 'Ray'
    } else {
        return el
    }
}))

console.log(arrObj.map(obj => {
    if (obj.number == 2) {
        return {...obj, alphabet: 'A' }
    } else {
        return obj
    }
}))

// Reduce Function (params = accumulator, value) , initial value

const arrNum = [1, 2, 3, 4, 5]
const totalSum = arrNum.reduce((accumulator, value) => {
    return accumulator += value
}, 0)

console.log(`Total Sum of Numbers: ${totalSum}`)

const arrLetter = ['a', 'b', 'c', 'd', 'e']
const arrObjLetter = arrLetter.reduce((accumulator, value) => {
    return [...accumulator, { 'letter': value }]
}, [])

console.log(arrObjLetter)