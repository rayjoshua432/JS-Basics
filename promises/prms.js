// No Promise Function
const fetchData1 = () => {
    let data = false

    setTimeout(() => {
        data = true
    }, 5000)

    return data
}

const displayData1 = (data) => {
    console.log(`Data: ${data}`)
}

const displayFetchData = fetchData1()

displayData1(displayFetchData)

// With Promise Function
const fetchData2 = () => {
    return new Promise((resolve, reject) => {
        let data = 1

        if (data == 10) {
            resolve(true)
        } else {
            reject(false)
        }
        //   setTimeout(() => {
        //       data = true
        //       resolve(data)
        //   }, 5000)
    })
}

const displayData2 = (data) => {
    console.log(`Data: ${data}`)
}

fetchData2().then(resolvedData => {
    displayData2(resolvedData)
}).catch(rejectedData => {
    console.error(`Fetching data failed: ${rejectedData}`)
})

// AXIOS for API Calling

axios({
    url: 'https://jsonplaceholder.typicode.com/posts/1/comments',
    method: 'GET',
}).then(resolvedData => {
    console.log(`Successfully fetched:`, resolvedData.data)
}).catch(rejectedData => {
    console.error(`Fetching data failed:`, rejectedData)
})

// AXIOS in function call

const fetchData3 = () => {
    const output = axios({
        url: 'https://jsonplaceholder.typicode.com/posts/1/comments',
        method: 'GET',
    }).then(resolvedData => {
        console.log(`Successfully fetched:`, resolvedData.data)
    }).catch(rejectedData => {
        console.error(`Fetching data failed:`, rejectedData)
    })
    return output
}

fetchData3()

// ASYNC AWAIT

const getName = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Ray Joshua')
        }, 3000)
    })
}
const getAge = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(23)
        }, 6000)
    })
}

console.log("Name: ", await getName())
console.log("Age: ", await getAge())

// Function in Async Await

const displayData4 = async() => {
    console.log("Name: ", await getName())
    console.log("Age: ", await getAge())
}

await displayData4()