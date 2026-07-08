
function Pet(name, type, age, ownerName) {
    this.name = name;
    this.petType = type;
    this.age = age;
    this.id = Symbol();
    this.owner = ownerName;
    this.getDescription = function() {
        alert( this.name +" is a " +this.petType +" and is " +this.age +" years old.");
    }
    this.haveBirthday = function () {
        this.age = this.age +1;
    }
    this.getOwnerName = function(){

    }
    this.getID = function(){
        return(this.id.toString());
    }


} 

let pet1 = new Pet("Eagly", "Eagle", 6, "Todd"); 
let pet2 = new Pet("Frumples", "Hampster", 2); 
let pet3 = new Pet("Horace", "Cat", 9, "Mary"); 
pet1.getDescription();
pet2.haveBirthday();
console.log(pet2.age);

console.log(pet1.name, pet1.petType, pet1.age, pet1.owner);
console.log(pet2.name, pet2.petType, pet2.age, pet2.owner);
console.log(pet3.name, pet3.petType, pet3.age, pet3.owner);
let now = new Date;
console.log(now);
/* This refers to the object currently being called. 
optional chaining lets you run things only if they have a requisite
date could be useful for projects that need current information.*/