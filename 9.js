const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./subfolder/text1.txt','utf8');
console.log(first);
writeFileSync(
    './subfolder/text2.txt',
    `Here is the result : ${first}`,
    {flag:'a'}
)