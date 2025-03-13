const path=require('path');
const { log } = require('util');
console.log(path.sep);
const filepath=path.join('/content/','subfolder','text.txt');
console.log(filepath);
const base=path.basename(filepath)
console.log(base);
console.log(path.resolve(__dirname,'content','subfolder','text.txt'));
