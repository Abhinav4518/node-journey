const{readFile,writeFile}=require('fs');
console.log('start');
readFile('./subfolder/text1.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    writeFile('./subfolder/result-async.txt',
        'Here is the result : Abhinav is king',
        (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('Done with task');
 })
})
console.log('Starting new file');