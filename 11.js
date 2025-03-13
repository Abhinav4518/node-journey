const http=require('http');
const server=http.createServer((req,res)=>{
     if(req.url==='/home'){
        res.end('Welcome to our Home Page');
     }
     if(req.url==='/about'){
        res.end('Here is our short history');
     }
})
server.listen(5000);