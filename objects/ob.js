const obj = {
    name: 'Ray Joshua',
    age: 20,
    gender: 'Male'
}

console.log(obj)

// Functions in Objects

// Get values from the object
console.log(obj.name)

// Get the keys from the object
console.log(Object.keys(obj))

// Get the values from the object
console.log(Object.values(obj))

// Get the key and value from the object 
console.log(Object.entries(obj))

// Assign values to the object
Object.assign(obj, { address: 'Davao City' })
console.log(obj)

// Spread operations in object
let obj2 = {...obj }
console.log(obj2)

// Destructure in object / Unpack the object
let { name, age } = obj
console.log(`Name: ${name} Age: ${age}`)
console.log(name)

// Loops

// For each function call
Object.keys(obj).forEach(key => {
    console.log(`${key}: `, obj[key])
})

// Classical loop
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log(obj[Object.keys(obj)[i]])
}

// For In operation
let objKeys = Object.keys(obj)
for (let i in objKeys) {
    console.log(`${i}: `, obj[objKeys[i]])
}

// For of operation
let objKeys2 = Object.keys(obj)
for (let val of objKeys2) {
    console.log(`${val}: `, obj[val])
}

// Entries function for loop
let objKeys3 = Object.entries(obj)
for (let [key, val] of objKeys3) {
    console.log(`${key}: ${val}`)
}

// Loops the entries function
let objKeys4 = Object.entries(obj)
for (let val of objKeys4) {
    console.log(`Pair: `, val)
}