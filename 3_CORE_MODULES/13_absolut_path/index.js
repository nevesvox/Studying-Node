const path = require('path')


console.log(path.resolve('teste.txt'))

// construct paths
const midFolder = 'billing'
const fileName = 'teste.txt'

const finalPath = path.join("/", 'archives', midFolder, fileName)

console.log(finalPath);