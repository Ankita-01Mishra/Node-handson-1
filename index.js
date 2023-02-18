const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("This the home page")
        res.end();
    }
   else if(req.method==='GET' && req.url==='/about'){
    res.write(JSON.stringify(["Hello",90,35,70,23]));
        res.end();
    }
   else if(req.method==='GET' && req.url==='/contact'){
    res.write('This is the contact page');
        res.end();
    }
});

server.listen(5500);