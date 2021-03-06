const path = require('path')

console.log(path.sep)
//get normalized file path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
//get base
const base = path.basename(filePath)
console.log(base)
//absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)