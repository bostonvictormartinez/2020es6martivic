function add(a,b) {
    return a+b
}
console.log(add(2,4))

//deconstruct

const student={
    firstName:'Victor',
    lastName:'Martinez',
    country:'US'
}

const { 
    firstName:firsty,lastName:surname,country:residentce}=student

console.log(firsty, surname,residentce)


//REST param and concat 

function el(joiner,...args){
    console.log(args)
    return args.join(joiner)
}

var res=el('+', 1,2,3);
console.log(res)



function el(joiner, ...args) {
    console.log(args)

    return args.join(joiner)
    
}

    var res=el('and', 1,2,3)

    console.log(res)









