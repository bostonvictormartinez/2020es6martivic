//global
var showname='test';

function getName(){

    
    console.log(showname)
    
}
getName()


//


function calcAge(vipFlag) {

    var amount=0;

    if(vipFlag){
        var amount=1
    }else{
        var amount=100
        {
            var amount=1000
        }
    }
    return amount
    
}
console.log(calcAge(true))