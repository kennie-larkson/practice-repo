
function Profile(name, age, gender){
     this.name = name;
     this.age = age;
     this.gender = gender;


     this.greeting = function(){

        console.log('Hello there! I am '+this.name+' | '+this.age+' | '+this.gender);
    }
    
}

let person1 = new Profile('Lawal', 25, 'Male');
person1.greeting();
console.log(person1.name+' '+person1.age+' '+person1.gender);



