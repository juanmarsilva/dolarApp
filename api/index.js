const http = require('http')
const server = http.createServer()

server.listen(3000,() => {
    console.log('corriendo en puerto 3000')
})
