//util.js
function showNumbers(limit){ //es6 can contanate
    for(let i=0;i<=limit;i++){
        const message=(i% 2===0)?'even':'odd'
        console.log(i,message)
    }
}

showNumbers()

import {sumAll} from './math.mjs'
console.log(sumAll(2,3))