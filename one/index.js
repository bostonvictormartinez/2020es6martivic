//blocking nodeJS
'use strict'

//blocking

console.log('step 1')
let start=Date.now();
for(let i=0;i<10;i++){
    console.log(i)
}

let end=Date.now();
console.log('step 2')

console.log(end-start);

console.log(end)
console.log(start)



//closure
function init(){
    let name='node course';
    function displayName(){
        console.log(name);
    }
    displayName();
}
init()











//blocking


console.log('step 1')
let start=Date.now();

for(var i=0;i<10;i++){
    console.log(i)
}

console.log('step 2')
let end=Date.now();
console.log(end-start)






//closure

function init(){
let nameNow='johny five'

function getAName(){
    console.log(getAName)
}
return getAName


}
init()





//blocking

console.log('first step');

let start=Date.now()

for(var i=0;i<10;i++){
    console.log(i)
}

console.log('step2')
let end=Date.now();
console.log(end-start)



//closure for aname

function init(){
let nameNow='name me',


function getName() {

    console.log(nameNow)
    
}

getName
}
init()







//closure































