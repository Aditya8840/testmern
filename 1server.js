// const { contentType } = require('express/lib/response');
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const server= http.createServer((req,res)=>{
   res.writeHead(200,{'content-Type':'text/html'});
    // res.setHeader("content-Type","text/plain")
    res.end("Namaste Duniya");
});
server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}`)
});
