var http = require('http');
var EventEmitter = require('events').EventEmitter;

function handleRequest(request,response){
    response.writeHead(200,{
        'Content-Type':'text/plain'
    });
    
    var count = 2 + 2;
    
    return response.end('The values of count is => '.concat(count))
}

var server = http.createServer(handleRequest);
var ee = new EventEmitter();
server.on('connection',function(client){
    
    ee.emit('newConnection',{
        num1:2,
        num2:2
    });
    
    console.log('There is a new connection => '.concat(client.remoteAddress)); 

});

ee.on('newConnection',function(data){
    console.log('Hey, I am a new events registered by event connection from http module'); 
    
    var count = parseInt(data.num1) + parseInt(data.num2);
    console.log('Result of count equals => ',count);
    console.log('Data => ',data);
});

server.listen(3000,'127.0.0.1');

/* primeira forma de escrever usando uma funcao de callback
http.createServer(function(request,response){
    
    response.writeHead(200,{
        'Content-Type':'text/plain'
    })
    
    return response.end('Hello world');
}).listen(3000,'127.0.0.1');*/