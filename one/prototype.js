//blocking

console.log('step 1')

var start= Date.now()
console.log(start)

for (var i=1;i<10;i++){
    console.log(i)
}

var end=Date.now()
console.log(end)

console.log('step 2');
console.log(end-start)

//closure

function init() {

    var name='dave'
    function displayName() {
        console.log(name);
    }displayName()
    
}
init()


function person(name, job, yearBorn) {

    this.name=name;
    this.job=job;
    this.yearBorn=yearBorn
    
}

console.log(person.prototype)

person.prototype.calculateAge=function () {
    
    console.log('age is'+(2021-this.yearBorn));

}

var p=new person('test', 'teacher', 1980);
console.log(p)
p.calculateAge()