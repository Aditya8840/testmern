//routing done
// const { json } = require('body-parser');
const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('data.json','utf-8');
const index = fs.readFileSync('index.html','utf-8');


const server =http.createServer((req,res)=>{
    console.log(req.url)
    switch(req.url){
        case'/' :
        res.setHeader('Content-Type','text/html');
          res.end(index);
          break;
        case'/api':
        res.setHeader('Content-Type','application/json');
           res.end(JSON.stringify(data));
           break;
           default:
            res.writeHead(404,'nahi mila')
            res.end();

    }

    console.log('Server Started');
  
})
server.listen(8080)
//