class Person {
    constructor(firstname,lastname,age,city,education){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.city=city;
        this.education=education;
    }
 getPersondetails(){
     return(`The name of the Person is ${this.firstname} ${this.lastname} ,of age ${this.age} ,has completed ${this.education} and currently lives in ${this.city} `);

 }
 
}
let person1 = new Person("mani","s","23","madurai","BE AUTO");
let person2 = new Person("dhana","f","22","chennai","BE mech");
let person3 = new Person("arun","v","21","cbe","BE cse");

console.log(person1.getPersondetails());
console.log(person3.age);