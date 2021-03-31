

const mathDemo=new Promise((resolve,reject)=>{
    if(Math.floor(Math.random()*100<90)){
        console.log('resolved')

        resolve('200 ok')
    }
    else{
        reject(new Error('error occur'))
    }
})

var onResolved=(rValue)=>{
    console.log(rValue)
}
var onReject=(error)=>{
    console.log(error)
}
mathDemo.then(onResolved, onReject)

//for multiple calls resolving or creating error Objects
//dependency between a collection we can see in detail