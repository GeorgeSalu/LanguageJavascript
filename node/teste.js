var prompt = require('./process');

prompt('What is yor name ?',function(data){    
    console.log(data);
    process.exit();
})

process.on('exit',function(){
    console.log('Bye, bye');
})
