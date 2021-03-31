const concat=function(joiner, ...args){
    console.log(args)
    return args.join(joiner)
}

console.log(concat('*', 1,2,3))


function sum(a,b){
    return a+b
}
console.log(sum(1+2+3,4,5))



let arr=[1,2,3, 42];
console.log(Math.max(...arr))












let array=[1,2,3,4]
console.log(Math.max(...array))


