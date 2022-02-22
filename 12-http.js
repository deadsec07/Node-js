const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }
    res.end(`
    <h1>oops!</h1>
    <p>we cant seem to find the page that you are looking for</p>
    <a href="/">homepage</a>`)
})

server.listen(5000)