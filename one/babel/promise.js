'use strict'
/*

var mathDemo=new Promise((resolve,reject)=>{

    if(Math.random()*100<10){
        console.log('resolve')
        return resolve()
    }else{
      reject(new Error('error occured'))

      
    
    }

})





const mathDemo=new Promise((resolve,reject)=>{

    if(Math.random()*100<10){
        console.log('resolve')
        return resolve()


    }else{

        reject(new Error('error'))
    }

})

console.log(typeof mathDemo)






const mathDemo=new Promise((resolve,reject)=>{
    if(Math.random()*100<90){
        console.log('reolve')
        return resolve()
    }else{
        reject(Error('error'))
    }
})


*/
/*


const mathDemo=new Promise((resolve,reject)=>{

    if(Math.random()*100<90){
        console.log('resolved')
        return resolve()
    }else{

        reject(new Error('error'))
    }

})


function calTotal(vipFlag) {

    var amount=0
    if(vipFlag){
        var amount=10;
    }else{
        var amount=100;
        {
            var amount=1000
        }
    }
    return amount
    
}

console.log(calTotal(true))



var methDemo=new Promise((resolve,reject)=>{

    if(Math.floor(Math.random()*100<90)){
        console.log('resolved');
        resolve('200 OK')
    }else{
        reject(new Error('error'))
    }



})


var onResolved=(rValue)=>{
    console.log(rValue+'huh')
}

var onReject=(error)=>{
    console.log(error+'huh error')
}

methDemo.then(onResolved,onReject)


console.log(methDemo)














var mathDemo=new Promise((resolve,reject)=>{
    if(Math.random()*100<90){
        console.log('resolved');
        resolve()
    }else{
        console.log('reject');
        reject(new Error('error'))
    }
    
})

var onResolved=(rValue)=>{
    console.log(rValue)
}

var onReject





// create a promise resolve reject with rvalue


var mathDemo=new Promise((resolve,reject)=>{

    if(Math.random()*100<90){
        console.log('resolved');
        resolve('200 OK');


    }else{
        reject(new Error('error'))
    }



})

var onResolved=(rValue)=>{

    console.log(rValue+'rvalue good');
}

var onReject=(error)=>{

    console.log(error+'error yo');


}

mathDemo.then(onResolved,onReject)





*/



var mathDemo=new Promise((resolve,reject)=>{

    if(Math.random()*100<90){
        console.log('resolve');
        resolve('200 OK')
    }else{
        reject(new Error('error'))
    }


})

var onResolved=(rValue)=>{
    console.log(rValue+'rvalue resolve')
}
var onReject=reject=>{
    console.log(reject+'rvalue reject')
}

mathDemo.then(onResolved,onReject)
























