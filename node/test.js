var http = require('http');

function handleRequest(request,response){
    response.writeHead(200,{
        'Content-Type':'text/plain'
    });
    
    var count = 2 + 2;
    
    return response.end('The values of count is => '.concat(count))
}

var server = http.createServer(handleRequest);

server.on('connection',function(client){
   console.log('There is a new connection => '.concat(client.remoteAddress)); 
});

server.listen(3000,'127.0.0.1');

/* primeira forma de escrever usando uma funcao de callback
http.createServer(function(request,response){
    
    response.writeHead(200,{
        'Content-Type':'text/plain'
    })
    
    return response.end('Hello world');
}).listen(3000,'127.0.0.1');*/