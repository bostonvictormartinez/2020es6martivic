//needs babel for ecma5 working
let helloWorldId='hello world'
console.log(helloWorldId)

import{square} from './lib.js';

var sqrt=square(2)
console.log(sqrt)

//we get cannont use import statmement outside a module so we need babel
//need to convert es6 to es5 npm install -D babel-cli
// npm install -D babel-preset-es2015

//now we have transpiler ready we create a new file .babelrc the config.file


//once run,,,copy all files to .mjs and run
// node --experiemental-modules index.mjs