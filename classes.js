class Vehicle{

    constructor(){
        console.log('constructor running ')
    }

    displayType(){
        console.log('car running')
    }
}
let vehicle= new Vehicle

console.log(typeof Vehicle)
console.log(vehicle instanceof Vehicle )

vehicle.displayType()


class Circle{
    constructor(radius){
        this.radius=radius;
    }
    get area(){   //use get to set area function
        return Math.PI*this.radius*this.radius
    }
}

var c=new Circle(4)  //class with constructor and extends to classB
console.log(c.area)

class Vehicle1{
    constructor(color){
        console.log(`car ${color}`)
    }
}
class Tesla extends Vehicle1{}
let model=new Tesla('orange')


class Base{
    constructor(options={}, data=[]){
        this.name='Base';
        this.url='http://bostonhotcars.com';
        this.data=data;
        this.options=options;
    }
}

class Derived extends Base{
    constructor(options={}, data=[]){
        super(options, data);
        this.age=19;
        this.country='US'
    }
}
let baseObj=new Base();
let deriveObj=new Derived({private:true},['1','2','3'])

console.log(baseObj)
console.log(deriveObj)