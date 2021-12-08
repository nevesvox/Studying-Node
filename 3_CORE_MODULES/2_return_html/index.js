const http = require("http")

const port = 3000


const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(`
    <h1>HTTP Teste Header</h1> 
    <ul> 
      <li>Teste</li> 
      <li>Teste</li> 
    </ul>`
  )
})


server.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})