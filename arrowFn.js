let car={
    name:'honda',
    make:'accord',
    getFullName:function(){
        return this.name + this.make
    }
}
console.log(car.getFullName())

let cars={
    aname:'toyota',
    make:'vespa',
    getFullNames:()=>{
        var display= `${this.aname}, ${this.make}`
        return display
    },
    getcarYear:(year)=>{

        return `car years ${year}`
    
    
    
    }
}
//console.log(cars.getFullNames())  //undefined until we Object.assign(this, cars)

Object.assign(this, cars)

console.log(cars.getFullNames())



console.log(cars.getcarYear(1990))