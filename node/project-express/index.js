var express = require('express');

var app =  express();

app.get('/',function(request,response){
    response.end('Hello World');
})

app.listen(3000,function(){
    console.log('The express server has been started...');
})