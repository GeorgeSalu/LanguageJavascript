function prompt(question,callback){
    'use strict';
    var stdin = process.stdin;
    var stdout = process.stdout;
    
    stdin.resume();
    stdout.write(question);
    
    stdin.once('data',function(data){
        callback(data.toString().trim());
    })
    
}

prompt('What is yor name ?',function(data){
    
    console.log(data);
    process.exit();
})

process.on('exit',function(){
    console.log('Bye, bye');
})

module.exports = prompt;