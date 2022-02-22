//destructure method
const {readFileSync, writeFileSync} = require('fs')
// normal access method
//const fs = require('fs')
//fs.read
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second)

//write to file
writeFileSync('./content/result-sync.txt', `here is the result: ${first}, ${second}`)
//write and append to file
writeFileSync('./content/result-sync.txt', `here is the result: ${first}, ${second}`, {flag: 'a'})

console.log('done with the task') 
console.log('starting the next task') 