const http = require("http")
const fs = require('fs')

const port = 3000


const server = http.createServer((req, res) => {
  fs.readFile('message.html', (err, data) => {
    res.writeHead(200, {'Contant-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
})


server.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})