const { readFile, writeFile } = require('fs')

console.log("start")
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/resault-async.txt', `Here is the resault : ${first} , ${second}`, (err, result) => {
            if(err) {
                console.log(err)
                return
            }
        })
        console.log("that's the task")
    })
})
console.log("let's do another task")