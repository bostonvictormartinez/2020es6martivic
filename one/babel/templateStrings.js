'use strict'
function sum(a,b){
    return a+b
}
console.log(sum(1,2,3,4,5))


//spread nodejs for an array variable

function el(joiner, ...args){
    console.log(args)
    return args.join(joiner)
}


var res1=el('and', 5,6,7,8)

console.log(res1)











let arr=[1,2,3]
console.log(Math.max(...arr))

let arrFriend=[1 ,2,3]

console.log(Math.max(...arrFriend))